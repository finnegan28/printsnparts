import React from 'react';

const ProductFilter = ({sortOrder, categoryFilter, searchQuery, handleOrderChange, handleCategoryChange, handleSearchChange }: {
  sortCriteria: string,
  sortOrder: string,
  categoryFilter: string,
  searchQuery: string,
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
      <select value={sortOrder} onChange={handleOrderChange} className="mr-2 p-2 border rounded">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select value={categoryFilter} onChange={handleCategoryChange} className="p-2 border rounded">
        <option value="all">All Categories</option>
        <option value="Headphone Repair">Headphone Repair</option>
        <option value="Cars">Car & Automotive</option>
        <option value="Gun Accessories">Gun Accessories</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default ProductFilter;