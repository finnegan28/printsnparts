import React, { useEffect, useState } from 'react';
import { fetchCSV } from '../utils/csvParser';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import ProductFilter from '../components/ProductFilter';

const ProductsPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortCriteria] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const productsPerPage = 9;

  useEffect(() => {
    fetchCSV('/listings.csv').then((data) => {
      const validProducts = data.filter((product) => product.TITLE && product.IMAGE1);
      setProducts(validProducts);
    });
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortCriteria === 'title') {
      return sortOrder === 'asc' ? a.TITLE.localeCompare(b.TITLE) : b.TITLE.localeCompare(a.TITLE);
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter(product => {
    const matchesCategory = categoryFilter === 'all' || product.CATEGORY === categoryFilter;
    const matchesSearch = product.TITLE.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-56">
      <h1 className="text-2xl font-bold text-center my-12">Our Products</h1>
      <ProductFilter
        sortCriteria={sortCriteria}
        sortOrder={sortOrder}
        categoryFilter={categoryFilter}
        searchQuery={searchQuery}
        handleOrderChange={handleOrderChange}
        handleCategoryChange={handleCategoryChange}
        handleSearchChange={handleSearchChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            title={product.TITLE}
            image={product.IMAGE1}
            url={product.URL}
          />
        ))}
      </div>
      <Pagination
        totalItems={filteredProducts.length}
        itemsPerPage={productsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductsPage;