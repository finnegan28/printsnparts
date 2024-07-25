import React from 'react';

const Sidebar = ({ onSearch, onSort }: { onSearch: (query: string) => void, onSort: (criteria: string) => void }) => {
  return (
    <div className="w-64 p-4 bg-gray-100 border-r">
      <h2 className="text-lg font-medium mb-4">Filters</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => onSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;