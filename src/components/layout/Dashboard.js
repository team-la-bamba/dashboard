import React from 'react';

import Sidebar from './Sidebar';

import LineChart from '../LineChart';
import Stats from '../Stats';
import TableChart from '../TableChart';

const Layout = () => {
    return (
      <div className="h-screen flex bg-gray-100">
    
        <Sidebar />

        <div className="flex flex-col w-0 flex-1 overflow-hidden">
        
          <main className="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6" tabindex="0" x-data x-init="$el.focus()">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
        
                  <Stats /> 
          
                  <div className="mt-10 grid grid-flow-row grid-cols-2 gap-4">
                    <div>
                      <TableChart />
                    </div>

                    <div>
                      <TableChart />
                    </div>
                  </div> 
        
                  <div className="mt-10">
                    <LineChart />
                  </div>
                  
                </div>
            </div> 
          </main>
        </div>
      </div>
    );
};

export default Layout; 





