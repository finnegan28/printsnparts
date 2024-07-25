import React from 'react';

const ProductFilter = ({ sortCriteria, sortOrder, categoryFilter, searchQuery, handleSortChange, handleOrderChange, handleCategoryChange, handleSearchChange }: {
  sortCriteria: string,
  sortOrder: string,
  categoryFilter: string,
  searchQuery: string,
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  handleOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="flex justify-end mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search products..."
        className="mr-2 p-2 border rounded"
      />
      <select value={sortCriteria} onChange={handleSortChange} className="mr-2 p-2 border rounded">
        <option value="title">Title</option>
        {/* Add more sorting options if needed */}
      </select>
      <select value={sortOrder} onChange={handleOrderChange} className="mr-2 p-2 border rounded">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select value={categoryFilter} onChange={handleCategoryChange} className="p-2 border rounded">
        <option value="all">All Categories</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default ProductFilter;