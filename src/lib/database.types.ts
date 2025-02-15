export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string
          role: 'student' | 'faculty' | 'admin'
          department: string | null
          enrollment_number: string | null
          email: string
          phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name: string
          role: 'student' | 'faculty' | 'admin'
          department?: string | null
          enrollment_number?: string | null
          email: string
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          role?: 'student' | 'faculty' | 'admin'
          department?: string | null
          enrollment_number?: string | null
          email?: string
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          code: string
          name: string
          department: string
          description: string | null
          credits: number
          faculty_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          code: string
          name: string
          department: string
          description?: string | null
          credits: number
          faculty_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          code?: string
          name?: string
          department?: string
          description?: string | null
          credits?: number
          faculty_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      admissions: {
        Row: {
          id: string
          applicant_name: string
          email: string
          phone: string
          program: string
          status: 'pending' | 'approved' | 'rejected'
          documents: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          applicant_name: string
          email: string
          phone: string
          program: string
          status?: 'pending' | 'approved' | 'rejected'
          documents?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          applicant_name?: string
          email?: string
          phone?: string
          program?: string
          status?: 'pending' | 'approved' | 'rejected'
          documents?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      announcements: {
        Row: {
          id: string
          title: string
          content: string
          category: string
          author_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          category: string
          author_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          category?: string
          author_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      attendance: {
        Row: {
          id: string
          student_id: string
          course_id: string
          date: string
          status: 'present' | 'absent' | 'late'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          course_id: string
          date: string
          status: 'present' | 'absent' | 'late'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          course_id?: string
          date?: string
          status?: 'present' | 'absent' | 'late'
          created_at?: string
          updated_at?: string
        }
      }
      assignments: {
        Row: {
          id: string
          course_id: string
          title: string
          description: string
          due_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          course_id: string
          title: string
          description: string
          due_date: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          title?: string
          description?: string
          due_date?: string
          created_at?: string
          updated_at?: string
        }
      }
      submissions: {
        Row: {
          id: string
          assignment_id: string
          student_id: string
          content: string
          submitted_at: string
          grade: number | null
          feedback: string | null
        }
        Insert: {
          id?: string
          assignment_id: string
          student_id: string
          content: string
          submitted_at?: string
          grade?: number | null
          feedback?: string | null
        }
        Update: {
          id?: string
          assignment_id?: string
          student_id?: string
          content?: string
          submitted_at?: string
          grade?: number | null
          feedback?: string | null
        }
      }
    }
  }
}