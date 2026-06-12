const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Software',
    excerpt: 'Exploring how artificial intelligence is transforming the way businesses operate and make decisions.',
    content: 'Artificial intelligence is revolutionizing enterprise software...',
    author: 'Sarah Chen',
    date: '2024-01-15',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Cloud Computing Trends for 2024',
    excerpt: 'What to expect in the cloud computing landscape this year and how to prepare your infrastructure.',
    content: 'The cloud computing landscape continues to evolve rapidly...',
    author: 'Michael Torres',
    date: '2024-01-10',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices for Remote Teams',
    excerpt: 'Essential security measures to protect your distributed workforce from cyber threats.',
    content: 'With remote work becoming the norm, cybersecurity is more important than ever...',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'A comprehensive guide to designing and implementing microservices that scale.',
    content: 'Microservices architecture has become the standard for building scalable applications...',
    author: 'David Kim',
    date: '2023-12-28',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'The Rise of Edge Computing',
    excerpt: 'How edge computing is reducing latency and enabling new real-time applications.',
    content: 'Edge computing is transforming how we process and analyze data...',
    author: 'Lisa Wang',
    date: '2023-12-20',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400',
    readTime: '4 min read'
  },
  {
    id: 6,
    title: 'DevOps Automation: From Zero to Hero',
    excerpt: 'Step-by-step guide to implementing DevOps practices in your organization.',
    content: 'DevOps transformation can seem daunting, but with the right approach...',
    author: 'James Wilson',
    date: '2023-12-15',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400',
    readTime: '10 min read'
  }
];

export async function fetchBlogPosts() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return blogPosts;
}

export async function fetchBlogPostById(id) {
  await new Promise(resolve => setTimeout(resolve, 100));
  return blogPosts.find(post => post.id === parseInt(id));
}

export async function fetchBlogPostsByCategory(category) {
  await new Promise(resolve => setTimeout(resolve, 200));
  return blogPosts.filter(post => post.category === category);
}