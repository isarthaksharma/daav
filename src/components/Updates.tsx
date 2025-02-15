import React from 'react';
import { Bell } from 'lucide-react';

const Updates: React.FC = () => {
  const updates = [
    {
      title: 'Admission Open for 2024',
      date: 'March 15, 2024',
      description: 'Applications are now open for the academic year 2024-25. Apply before April 30th.',
    },
    {
      title: 'Annual Sports Meet',
      date: 'March 20, 2024',
      description: 'Annual sports meet will be held from March 20-22. Register now to participate.',
    },
    {
      title: 'Campus Placement Drive',
      date: 'March 25, 2024',
      description: 'Major IT companies will be visiting for campus placements. Register at placement cell.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center mb-6">
        <Bell className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold">Latest Updates</h2>
      </div>
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">{update.title}</h3>
              <span className="text-sm text-gray-500">{update.date}</span>
            </div>
            <p className="mt-2 text-gray-600">{update.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;