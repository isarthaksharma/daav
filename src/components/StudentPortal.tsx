import React, { useState } from 'react';
import { BookOpen, Calendar, FileText, Clock, Bell } from 'lucide-react';
import toast from 'react-hot-toast';

const StudentPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      toast.success('Logged in successfully');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Student Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Attendance</h3>
                <p className="text-2xl font-bold text-blue-600">85%</p>
                <p className="text-sm text-gray-600">Last updated: Today</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Assignments</h3>
                <p className="text-2xl font-bold text-green-600">5 Pending</p>
                <p className="text-sm text-gray-600">Due this week</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Next Exam</h3>
                <p className="text-2xl font-bold text-purple-600">Mar 25</p>
                <p className="text-sm text-gray-600">Mid-semester test</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Recent Announcements</h3>
              <div className="space-y-4">
                {[
                  { title: 'Mid-semester exam schedule released', date: 'March 15, 2024' },
                  { title: 'Workshop on Machine Learning', date: 'March 18, 2024' },
                  { title: 'Holiday notice: Holi Festival', date: 'March 25, 2024' }
                ].map((announcement, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center">
                      <Bell className="h-4 w-4 text-blue-600 mr-2" />
                      <span>{announcement.title}</span>
                    </div>
                    <span className="text-sm text-gray-500">{announcement.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'assignments':
        return (
          <div className="space-y-4">
            {[
              { subject: 'Data Structures', title: 'Implementation of Binary Trees', due: '2024-03-20', status: 'pending' },
              { subject: 'Database Management', title: 'SQL Query Optimization', due: '2024-03-22', status: 'pending' },
              { subject: 'Web Development', title: 'React Components', due: '2024-03-25', status: 'submitted' }
            ].map((assignment, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{assignment.subject}</h3>
                    <p className="text-gray-600">{assignment.title}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    assignment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                  </span>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  Due: {assignment.due}
                </div>
              </div>
            ))}
          </div>
        );

      case 'attendance':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Monthly Attendance Report</h3>
              <div className="space-y-4">
                {[
                  { subject: 'Data Structures', percentage: 85 },
                  { subject: 'Database Management', percentage: 90 },
                  { subject: 'Web Development', percentage: 88 }
                ].map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{subject.subject}</span>
                      <span className="font-semibold">{subject.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${subject.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold">Student Portal</h2>
        </div>
        <button
          onClick={() => {
            setIsLoggedIn(false);
            toast.success('Logged out successfully');
          }}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b">
          <nav className="flex">
            {[
              { id: 'dashboard', icon: BookOpen, label: 'Dashboard' },
              { id: 'assignments', icon: FileText, label: 'Assignments' },
              { id: 'attendance', icon: Calendar, label: 'Attendance' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 focus:outline-none ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;