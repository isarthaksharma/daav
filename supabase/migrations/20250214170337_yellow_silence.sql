/*
  # Initial Schema Setup for College Management System

  1. New Tables
    - `profiles`
      - Student and faculty profiles
      - Linked to Supabase auth
    - `courses`
      - Available courses/programs
    - `admissions`
      - Admission applications
    - `announcements`
      - College announcements and updates
    - `attendance`
      - Student attendance records
    - `assignments`
      - Course assignments
    - `submissions`
      - Assignment submissions

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Separate policies for students and faculty

  3. Changes
    - Initial schema creation
    - Basic RLS policies
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  full_name text NOT NULL,
  role text NOT NULL CHECK (role IN ('student', 'faculty', 'admin')),
  department text,
  enrollment_number text UNIQUE,
  email text UNIQUE NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Create courses table
CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  name text NOT NULL,
  department text NOT NULL,
  description text,
  credits integer NOT NULL,
  faculty_id uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Courses are viewable by everyone"
  ON courses FOR SELECT
  USING (true);

CREATE POLICY "Faculty can update own courses"
  ON courses FOR UPDATE
  USING (auth.uid() = faculty_id);

-- Create admissions table
CREATE TABLE admissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  applicant_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  program text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  documents jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE admissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own applications"
  ON admissions FOR SELECT
  USING (email = auth.jwt()->>'email');

CREATE POLICY "Users can create applications"
  ON admissions FOR INSERT
  WITH CHECK (true);

-- Create announcements table
CREATE TABLE announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  author_id uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Announcements are viewable by everyone"
  ON announcements FOR SELECT
  USING (true);

CREATE POLICY "Only admins can create announcements"
  ON announcements FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  ));

-- Create attendance table
CREATE TABLE attendance (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES profiles(id),
  course_id uuid REFERENCES courses(id),
  date date NOT NULL,
  status text NOT NULL CHECK (status IN ('present', 'absent', 'late')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(student_id, course_id, date)
);

ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view own attendance"
  ON attendance FOR SELECT
  USING (student_id = auth.uid());

CREATE POLICY "Faculty can manage attendance for their courses"
  ON attendance FOR ALL
  USING (EXISTS (
    SELECT 1 FROM courses
    WHERE id = attendance.course_id
    AND faculty_id = auth.uid()
  ));

-- Create assignments table
CREATE TABLE assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id),
  title text NOT NULL,
  description text NOT NULL,
  due_date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Assignments are viewable by enrolled students and faculty"
  ON assignments FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM courses
    WHERE id = assignments.course_id
    AND (
      faculty_id = auth.uid()
      OR EXISTS (
        SELECT 1 FROM profiles
        WHERE id = auth.uid()
        AND role = 'student'
      )
    )
  ));

-- Create submissions table
CREATE TABLE submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id uuid REFERENCES assignments(id),
  student_id uuid REFERENCES profiles(id),
  content text NOT NULL,
  submitted_at timestamptz DEFAULT now(),
  grade numeric,
  feedback text,
  UNIQUE(assignment_id, student_id)
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view and create own submissions"
  ON submissions FOR ALL
  USING (student_id = auth.uid());

CREATE POLICY "Faculty can view and grade submissions for their courses"
  ON submissions FOR ALL
  USING (EXISTS (
    SELECT 1 FROM assignments a
    JOIN courses c ON c.id = a.course_id
    WHERE a.id = submissions.assignment_id
    AND c.faculty_id = auth.uid()
  ));

-- Create functions for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updating timestamps
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON courses
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_admissions_updated_at
  BEFORE UPDATE ON admissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_announcements_updated_at
  BEFORE UPDATE ON announcements
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_assignments_updated_at
  BEFORE UPDATE ON assignments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();