import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Innovative Tech<br />Solutions
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            We provide cutting-edge technology solutions to transform your business and drive growth in the digital age.
          </p>
          <div className="flex gap-4">
            <Link to="/products" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold transition-all">
              Explore Products
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-gray-600 hover:border-primary-500 rounded-lg font-semibold transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose TechHub</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'Cutting-edge solutions for modern challenges', icon: '🚀' },
              { title: 'Reliability', desc: 'Enterprise-grade quality you can trust', icon: '🛡️' },
              { title: 'Support', desc: '24/7 dedicated support for all your needs', icon: '💬' }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-dark-900 rounded-xl border border-dark-800 hover:border-primary-500 transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-8">Join hundreds of companies that trust TechHub for their technology needs.</p>
          <Link to="/contact" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-lg font-semibold transition-all">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;