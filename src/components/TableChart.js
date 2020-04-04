import React from 'react';

const TableChart = () => {
    return (
        <div className="bg-white shadow overflow-hidden  sm:rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Fråga: Hur mår du?
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
              Statistik
            </p>
          </div>

        <div className="px-4 py-5 sm:p-0">
          
        <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 sm:py-5">
            <div className="text-sm leading-5 font-medium text-gray-500">
              Kommun
            </div>
 
            <div className="text-sm leading-5 font-medium text-gray-500">
              Bra
            </div>
            
            <div className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0">
              Dåligt
            </div>

            <div className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 flex">
              <div className="mr-2">Procent</div> 
            </div>
          </div>

          <dl>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Varbergs
              </dt>

              <dt className="text-sm leading-5 font-medium text-gray-500">
                2000
              </dt>
              
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0">
                5000
              </dd>

              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 flex text-red-500">
                <div className="mr-2">15%</div>
                <svg width="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" className="svg-inline--fa fa-arrow-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
              </dd> 

            </div>
              
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Falkenberg
              </dt>

              <dt className="text-sm leading-5 font-medium text-gray-500">
                1350
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0">
                120
              </dd>

              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 flex text-green-500">
                <div className="mr-2">45%</div>
                <svg width="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" className="svg-inline--fa fa-arrow-up fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/></svg>
              </dd> 
            </div>
          </dl>
        </div>
      </div>
    );
};

export default TableChart;

