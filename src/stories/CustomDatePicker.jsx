import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { ko } from 'date-fns/locale';
import { subDays, subWeeks, subMonths, startOfDay, endOfDay } from 'date-fns';
import { ButtonGroup } from './ButtonGroup';

const CustomDatePicker = ({ type = 'single', disabled, disablePast, disableFuture, minDate, maxDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateRange, setDateRange] = useState({ start: new Date(), end: new Date() });
  const [selectedValue, setSelectedValue] = useState('');

  const calculateRange = (value) => {
    const today = new Date();
    switch (value) {
      case 'today':
        return { start: startOfDay(today), end: startOfDay(today) };
      case 'yesterday':
        return { start: startOfDay(subDays(today, 1)), end: startOfDay(subDays(today, 1)) };
      case 'week':
        return { start: startOfDay(subWeeks(today, 1)), end: endOfDay(today) };
      case 'month':
        return { start: startOfDay(subMonths(today, 1)), end
          
          : endOfDay(today) };
      default:
        return { start: null, end: null };
    }
  };

  const handleRangeChange = (value) => {
    setSelectedValue(value);
    const range = calculateRange(value);
    setDateRange(range);
    if (type === 'single') setSelectedDate(range.start);
  };

  const renderDatePicker = (value, onChange) => (
    <DatePicker
      value={value}
      onChange={onChange}
      slotProps={{ textField: { size: 'small' } }}
      renderInput={(params) => (
        <TextField
          {...params}
        />
      )}
      disabled={Boolean(disabled)}
      disablePast={disablePast}
      disableFuture={disableFuture}
      minDate={minDate}
      maxDate={maxDate}
    />
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko} >
      <div style={{display:'flex', gap:'10px'}}>
      {type === 'multiButtons' && (
        <div>
          <ButtonGroup
            buttons={[
              { label: '오늘', value: 'today' },
              { label: '어제', value: 'yesterday' },
              { label: '일주일', value: 'week' },
              { label: '1개월', value: 'month' },
            ]}
            selectedValue={selectedValue}
            onChange={handleRangeChange}
            disabled={disabled}
          />
        </div>
      )} 
      {type === 'single' &&
        renderDatePicker(selectedDate, (newValue) => setSelectedDate(newValue))}
      {type !== 'single' && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {renderDatePicker(dateRange.start, (newValue) =>
            setDateRange((prev) => ({ ...prev, start: newValue }))
          )}
          <span style={{ fontSize: '1.25rem', padding: '0 8px' }}>~</span>
          {renderDatePicker(dateRange.end, (newValue) =>
            setDateRange((prev) => ({ ...prev, end: newValue }))
          )}
        </div>
      )}
      </div>
      
     
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
