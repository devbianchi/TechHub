import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/productService';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', 'ai', 'cloud', 'web', 'hardware'];
  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  if (loading) return <div className="p-8 text-center">Loading products...</div>;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-gray-400 mb-8">Explore our cutting-edge technology solutions</p>

        {/* Filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg capitalize transition-all ${
                filter === cat
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-gray-400 hover:bg-dark-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-dark-900 rounded-xl overflow-hidden border border-dark-800 hover:border-primary-500 transition-all">
              <div className="h-48 bg-dark-800">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary-400 uppercase">{product.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <ul className="mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="text-primary-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;