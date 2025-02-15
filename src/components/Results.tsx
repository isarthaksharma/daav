import React, { useState } from 'react';
import { GraduationCap, Search } from 'lucide-react';
import toast from 'react-hot-toast';

const Results: React.FC = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (rollNumber) {
      setShowResults(true);
      toast.success('Results found');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center mb-8">
        <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
        <h2 className="text-3xl font-bold">Examination Results</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="rollNumber" className="block text-sm font-medium mb-1">
              Enter Roll Number
            </label>
            <input
              id="rollNumber"
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="e.g., 2024CS001"
              required
            />
          </div>
          <button
            type="submit"
            className="self-end bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
      </div>

      {showResults && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="border-b pb-4 mb-4">
              <h3 className="text-xl font-semibold">Student Details</h3>
              <p className="text-gray-600">Roll Number: {rollNumber}</p>
              <p className="text-gray-600">Name: John Doe</p>
              <p className="text-gray-600">Course: B.Tech Computer Science</p>
              <p className="text-gray-600">Semester: 4th</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Semester Results</h3>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left">Subject</th>
                    <th className="px-4 py-2 text-center">Internal</th>
                    <th className="px-4 py-2 text-center">External</th>
                    <th className="px-4 py-2 text-center">Total</th>
                    <th className="px-4 py-2 text-center">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { subject: 'Data Structures', internal: 28, external: 58, total: 86, grade: 'A' },
                    { subject: 'Database Systems', internal: 25, external: 55, total: 80, grade: 'A' },
                    { subject: 'Computer Networks', internal: 27, external: 52, total: 79, grade: 'B' },
                    { subject: 'Operating Systems', internal: 29, external: 57, total: 86, grade: 'A' }
                  ].map((subject, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{subject.subject}</td>
                      <td className="px-4 py-2 text-center">{subject.internal}</td>
                      <td className="px-4 py-2 text-center">{subject.external}</td>
                      <td className="px-4 py-2 text-center">{subject.total}</td>
                      <td className="px-4 py-2 text-center">{subject.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4 p-4 bg-blue-50 rounded-md">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">SGPA:</span>
                  <span>8.5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">CGPA:</span>
                  <span>8.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;