import React, { useState, useEffect } from 'react';
import { fetchJobs } from '../services/careerService';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const data = await fetchJobs();
      setJobs(data);
    } catch (error) {
      console.error('Failed to load jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading careers...</div>;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl py-10 mx-auto">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-gray-400 mb-12">Build the future of technology with us</p>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive coverage' },
            { icon: '🏝️', title: 'Remote Work', desc: 'Work from anywhere' },
            { icon: '📚', title: 'Learning Budget', desc: '$2000/year' },
            { icon: '🎉', title: 'Team Events', desc: 'Regular gatherings' }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-dark-900 p-6 rounded-xl border border-dark-800">
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <h3 className="font-semibold mb-1">{benefit.title}</h3>
              <p className="text-gray-500 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {jobs.map(job => (
            <div
              key={job.id}
              className="bg-dark-900 rounded-xl border border-dark-800 overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer hover:bg-dark-800/50 transition-all"
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="text-gray-500">
                    {selectedJob === job.id ? '▲' : '▼'}
                  </div>
                </div>
              </div>

              {selectedJob === job.id && (
                <div className="px-6 pb-6 border-t border-dark-800">
                  <div className="pt-6 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Description</h4>
                      <p className="text-gray-400">{job.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-gray-400 flex items-center gap-2">
                            <span className="text-primary-500">✓</span> {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-4 px-6 py-3 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
