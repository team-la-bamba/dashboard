import React from 'react';

import Select from "./Select";
import DatePicker from "./DatePicker";

const Filter = () => {
    
    return (
        <div>
            <h3 className="font-medium text-gray-900">
               Filtreringsval
            </h3>
            
            <div className="mt-5">
                <label>Välj region</label>
                
                <div className="inline-block relative w-full">
                    <Select/> 
                </div>
            </div>
                        
            <DatePicker />

        </div>
    );
};

export default Filter;
