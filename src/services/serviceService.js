const services = [
  {
    id: 1,
    name: 'AI Consulting',
    description: 'Expert consultation on implementing AI solutions for your business',
    price: 299,
    duration: 'per hour',
    icon: '🤖',
    features: ['Strategy development', 'Implementation roadmap', 'Team training']
  },
  {
    id: 2,
    name: 'Cloud Migration',
    description: 'Seamless migration of your infrastructure to the cloud',
    price: 4999,
    duration: 'starting at',
    icon: '☁️',
    features: ['Assessment', 'Migration plan', 'Post-migration support']
  },
  {
    id: 3,
    name: 'Cybersecurity Audit',
    description: 'Comprehensive security assessment and vulnerability testing',
    price: 2499,
    duration: 'per project',
    icon: '🔒',
    features: ['Risk assessment', 'Penetration testing', 'Compliance check']
  },
  {
    id: 4,
    name: 'Custom Development',
    description: 'Tailored software development for your specific needs',
    price: 150,
    duration: 'per hour',
    icon: '💻',
    features: ['Agile methodology', 'Regular updates', 'Quality assurance']
  },
  {
    id: 5,
    name: 'Data Analytics',
    description: 'Transform your data into actionable insights with our analytics services',
    price: 999,
    duration: 'per month',
    icon: '📊',
    features: ['Dashboard creation', 'Predictive analytics', 'Monthly reports']
  },
  {
    id: 6,
    name: '24/7 Support',
    description: 'Round-the-clock technical support for your systems',
    price: 499,
    duration: 'per month',
    icon: '🎧',
    features: ['Fast response', 'Multiple channels', 'Dedicated team']
  }
];

export async function fetchServices() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return services;
}

export async function fetchServiceById(id) {
  await new Promise(resolve => setTimeout(resolve, 100));
  return services.find(s => s.id === parseInt(id));
}
