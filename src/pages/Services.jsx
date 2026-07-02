import React, { useState, useEffect } from 'react';
import { fetchServices } from '../services/serviceService';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await fetchServices();
      setServices(data);
    } catch (error) {
      console.error('Failed to load services:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading services...</div>;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl py-10 mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-400 mb-12">Professional technology services to help your business thrive</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-dark-900 rounded-xl p-8 border border-dark-800 hover:border-primary-500 transition-all">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="text-primary-500">•</span> {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-dark-800">
                <div>
                  <span className="text-2xl font-bold">${service.price}</span>
                  <span className="text-gray-500 text-sm">/{service.duration}</span>
                </div>
                <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-all">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
