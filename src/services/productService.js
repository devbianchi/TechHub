const products = [
  {
    id: 1,
    name: 'NeuralEngine Pro',
    description: 'AI-powered neural network accelerator for machine learning workloads',
    price: 2999,
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
    features: ['10x faster inference', 'Low power consumption', 'Easy integration']
  },
  {
    id: 2,
    name: 'CloudStack Enterprise',
    description: 'Complete cloud infrastructure solution for scalable applications',
    price: 499,
    category: 'cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
    features: ['Auto-scaling', '99.99% uptime', 'Global CDN']
  },
  {
    id: 3,
    name: 'DevOps Toolkit',
    description: 'All-in-one CI/CD and deployment automation platform',
    price: 199,
    category: 'web',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400',
    features: ['Automated pipelines', 'Rollback support', 'Team collaboration']
  },
  {
    id: 4,
    name: 'QuantumBoard',
    description: 'Next-generation quantum computing development board',
    price: 9999,
    category: 'hardware',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
    features: ['16 qubits', 'Error correction', 'SDK included']
  },
  {
    id: 5,
    name: 'DataVault Pro',
    description: 'Enterprise-grade data encryption and security solution',
    price: 799,
    category: 'web',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
    features: ['AES-256 encryption', 'Key management', 'Compliance reports']
  },
  {
    id: 6,
    name: 'EdgeCompute Mini',
    description: 'Compact edge computing device for IoT applications',
    price: 399,
    category: 'hardware',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400',
    features: ['5G connectivity', 'Offline operation', 'Low latency']
  }
];

export async function fetchProducts() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return products;
}

export async function fetchProductById(id) {
  await new Promise(resolve => setTimeout(resolve, 100));
  return products.find(p => p.id === parseInt(id));
}

export async function fetchProductsByCategory(category) {
  await new Promise(resolve => setTimeout(resolve, 200));
  return products.filter(p => p.category === category);
}