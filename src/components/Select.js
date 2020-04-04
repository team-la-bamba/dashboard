import React from 'react';
import Select from 'react-select';

export default () => {

    const customStyles = {
        option: (provided) => ({
          ...provided,
          padding: 20,
          color: "#333"
        }),
        control: (provided) => ({
            ...provided,
            boxShadow: "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)",
            borderColor: "#9fa6b2",
            padding: "0"
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: "0"
        }),
        indicatorSeparator: () => ({}),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#333'
        }),
        placeholder: () => ({
            color: '#333',
            paddingLeft: '1rem'
        })
    }

    return (
    <Select
      isSearchable={true}
      isClearable={true}
      styles={customStyles}
    />
  );
   
};
