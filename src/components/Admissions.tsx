import React, { useState } from 'react';
import { BookOpen, Calendar, Download } from 'lucide-react';
import toast from 'react-hot-toast';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'B.A.'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: 'B.A.'
    });
  };

  const courses = [
    {
      name: 'Undergraduate Programs',
      courses: ['B.A.', 'B.Sc.', 'B.Com.', 'BCA'],
      lastDate: 'June 30, 2024',
      fee: '₹45,000/year'
    },
    {
      name: 'Postgraduate Programs',
      courses: ['M.A.', 'M.Sc.', 'M.Com.', 'MCA'],
      lastDate: 'July 15, 2024',
      fee: '₹65,000/year'
    },
    {
      name: 'Diploma Courses',
      courses: ['Diploma in Computer Applications', 'Diploma in Business Management'],
      lastDate: 'July 30, 2024',
      fee: '₹35,000/year'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <BookOpen className="mr-2 h-8 w-8 text-blue-600" />
          Admissions 2024-25
        </h2>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
          <p className="text-lg">Applications are now open for the academic year 2024-25. Early applicants get priority in hostel accommodation.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <div>
                <p className="font-medium">Application Start Date</p>
                <p className="text-gray-600">March 15, 2024</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <div>
                <p className="font-medium">Last Date for UG Programs</p>
                <p className="text-gray-600">June 30, 2024</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <div>
                <p className="font-medium">Last Date for PG Programs</p>
                <p className="text-gray-600">July 15, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Downloads</h3>
          <div className="space-y-3">
            {[
              'Admission Prospectus',
              'Application Form',
              'Fee Structure',
              'Required Documents List'
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => toast.success(`Downloading ${item}`)}
                className="w-full flex items-center justify-between p-3 border rounded-md hover:bg-gray-50"
              >
                <span>{item}</span>
                <Download className="h-5 w-5 text-blue-600" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Apply Now</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Program</label>
            <select
              value={formData.program}
              onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
            >
              {courses.flatMap(category => 
                category.courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))
              )}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {courses.map((program, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{program.name}</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium mb-2">Available Courses</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {program.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Last Date</h4>
                <p className="text-gray-600">{program.lastDate}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Average Fee</h4>
                <p className="text-gray-600">{program.fee}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admissions;