import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl py-10 mx-auto">
        <h1 className="text-4xl font-bold mb-8">About TechHub</h1>

        <div className="space-y-8">
          <section className="bg-dark-900 rounded-xl p-8 border border-dark-800">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              At TechHub, we believe in the power of technology to transform businesses and improve lives.
              Our mission is to provide innovative, reliable, and accessible technology solutions that
              empower our clients to succeed in the digital age.
            </p>
          </section>

          <section className="bg-dark-900 rounded-xl p-8 border border-dark-800">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Founded in 2020, TechHub has grown from a small startup to a leading technology solutions provider.
              Our team of experts spans across multiple disciplines, including AI, cloud computing, cybersecurity,
              and software development.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">50+</div>
                <div className="text-gray-500 text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">200+</div>
                <div className="text-gray-500 text-sm">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">100+</div>
                <div className="text-gray-500 text-sm">Projects</div>
              </div>
            </div>
          </section>

          <section className="bg-dark-900 rounded-xl p-8 border border-dark-800">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4">
              {[
                { title: 'Innovation', desc: 'We constantly push boundaries and explore new technologies' },
                { title: 'Integrity', desc: 'We build trust through transparency and honest relationships' },
                { title: 'Excellence', desc: 'We strive for the highest quality in everything we do' },
                { title: 'Collaboration', desc: 'We work together to achieve the best results' }
              ].map((value, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                  <div>
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="text-gray-500 text-sm">{value.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
