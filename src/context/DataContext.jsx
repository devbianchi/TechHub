import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchProducts } from '../services/productService';
import { fetchServices } from '../services/serviceService';
import { fetchBlogPosts } from '../services/blogService';
import { fetchJobs } from '../services/careerService';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      setLoading(true);
      const [productsData, servicesData, blogData, jobsData] = await Promise.all([
        fetchProducts(),
        fetchServices(),
        fetchBlogPosts(),
        fetchJobs()
      ]);
      setProducts(productsData);
      setServices(servicesData);
      setBlogPosts(blogData);
      setJobs(jobsData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const refreshProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      console.error('Failed to refresh products:', err);
    }
  };

  const refreshServices = async () => {
    try {
      const data = await fetchServices();
      setServices(data);
    } catch (err) {
      console.error('Failed to refresh services:', err);
    }
  };

  const value = {
    products,
    services,
    blogPosts,
    jobs,
    loading,
    error,
    refreshProducts,
    refreshServices,
    reloadAll: loadAllData
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}