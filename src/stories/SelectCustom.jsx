import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';

// SelectCustom 컴포넌트
export default function SelectCustom({displayEmpty, error, fullWidth, selected, multiple, disabled, placeholder, options, onChange }) {

  const [selectList, setSelectList] = useState(multiple ? selected : ''); 
  const [data, setData] = useState([]);

  useEffect(() => {
    // options이 문자열 배열이라면 객체 배열로 변환
    if (Array.isArray(options)) {
      setData(options.map(option => {
        if (typeof option === 'object' && option !== null) {
          return option;
        }
        return { value: option, label: `${option}` }; 
      }));
    }
  }, [options]);

  useEffect(() => {
    setSelectList(multiple ? selected : selected[0] || '');
  }, [selected, multiple]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectList(newValue);
    onChange(newValue);
  };

  return (
    <FormControl 
      sx={{ 
        minWidth: 150, 
       // height: '40px',
        width: fullWidth ? '100%' : 'auto', 
      }}>
      <Select
        id="selectList"
        value={selectList}
        fullWidth={fullWidth ? fullWidth : true}
        disabled={disabled ? disabled : false}
        displayEmpty={displayEmpty ? displayEmpty : true}
        error={error ? error : false}
        input={<OutlinedInput  size='small' />}
        onChange={handleChange} 
        multiple={multiple}
        label={placeholder}
        //disabled={disabled}
       // fullWidth={fullWidth}
        //displayEmpty
        renderValue={(selectedValue) => {
          if (multiple) {
            if (selectedValue.length === 0) {
              return <Typography color="textSecondary">{placeholder}</Typography>;
            }

            return selectedValue
            .map(value => {
              const selectedItem = data.find(item => item.value === value);
              return selectedItem ? selectedItem.label : '';
            }).join(', ');
          } else {
            if (selectedValue === '' || selectedValue === undefined) {
              return <Typography color="textSecondary">{placeholder}</Typography>;
            }
            if (!selectedValue) {
              return <Typography color="textSecondary">{placeholder}</Typography>;
            }
        
            const selectedItem = data.find(item => item.value === selectedValue);
            return selectedItem ? selectedItem.label : ''; 
          }
        }}
      >
        {data.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
