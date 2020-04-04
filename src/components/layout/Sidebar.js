import React from 'react';
import Filter from '../Filter';

const Sidebar = ({ onClick = () => {} }) => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col border-r border-gray-200 bg-white">
        <div className="h-0 flex-1 flex flex-col pt-5 pb-4">
          <nav className="flex-1 bg-white px-4 py-2">
            <Filter onClick={onClick} />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
