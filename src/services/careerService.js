const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for an experienced Frontend Developer to join our team.',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with modern CSS and animations',
      'Knowledge of testing frameworks'
    ],
    postedDate: '2024-01-20'
  },
  {
    id: 2,
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Join our backend team to build scalable microservices.',
    requirements: [
      '3+ years of Node.js experience',
      'Experience with cloud platforms (AWS/GCP)',
      'Knowledge of databases (PostgreSQL, MongoDB)',
      'Understanding of distributed systems'
    ],
    postedDate: '2024-01-18'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us build and maintain our cloud infrastructure.',
    requirements: [
      'Experience with Kubernetes and Docker',
      'Strong scripting skills',
      'Knowledge of CI/CD pipelines',
      'Infrastructure as Code (Terraform)'
    ],
    postedDate: '2024-01-15'
  },
  {
    id: 4,
    title: 'AI/ML Engineer',
    department: 'Data Science',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Work on cutting-edge AI projects and machine learning models.',
    requirements: [
      'MS/PhD in Computer Science or related field',
      'Experience with PyTorch or TensorFlow',
      'Strong mathematical background',
      'Published research is a plus'
    ],
    postedDate: '2024-01-12'
  },
  {
    id: 5,
    title: 'Product Manager',
    department: 'Product',
    location: 'Austin, TX',
    type: 'Full-time',
    description: 'Lead product strategy and work with engineering teams.',
    requirements: [
      '3+ years of product management experience',
      'Technical background preferred',
      'Strong analytical skills',
      'Excellent communication'
    ],
    postedDate: '2024-01-10'
  },
  {
    id: 6,
    title: 'Security Engineer',
    department: 'Security',
    location: 'Remote',
    type: 'Full-time',
    description: 'Protect our systems and data from security threats.',
    requirements: [
      'Experience with security auditing',
      'Knowledge of penetration testing',
      'Familiarity with compliance frameworks',
      'Security certifications preferred'
    ],
    postedDate: '2024-01-08'
  }
];

export async function fetchJobs() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return jobs;
}

export async function fetchJobById(id) {
  await new Promise(resolve => setTimeout(resolve, 100));
  return jobs.find(job => job.id === parseInt(id));
}