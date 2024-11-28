import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { ko } from 'date-fns/locale';
import { subDays, subWeeks, subMonths, startOfDay, endOfDay } from 'date-fns';
import { ButtonGroup } from './ButtonGroup';

const CustomTimePicker = ({ type = 'single', disabled, disablePast, disableFuture, minDate, maxDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateRange, setDateRange] = useState({ start: new Date(), end: new Date() });
  const [selectedValue, setSelectedValue] = useState('');

  const renderTimePicker = (value, onChange) => (
    <TimePicker
      ampm='true'
      value={value}
      onChange={onChange}
      slotProps={{ textField: { size: 'small' } }}
      renderInput={(params) => <TextField {...params} 
        sx={{
          '&.MuiInputBase-root':{
            backgroundColor:params.disabled ? '#f0f0f0':'transparent',
            cursor:params.disabled?'not-allowed':'text', 
          },
          '&.MuiInputBase-root':{
            color:params.disabled?"#9e9e9e":"initial",
          },
          '$.MuiOutlinedInput-notchedOutline':{
            borderColor:params.disabled?'#e0e0e0':'inherit',
          }
        }}
      />}
      disabled={Boolean(disabled)}
      disablePast={disablePast}
      disableFuture={disableFuture}
      minDate={minDate}
      maxDate={maxDate}
    />
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      {type === 'single' &&
        renderTimePicker(selectedDate, (newValue) => setSelectedDate(newValue))}
      {type !== 'single' && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {renderTimePicker(dateRange.start, (newValue) =>
            setDateRange((prev) => ({ ...prev, start: newValue }))
          )}
          <span style={{ fontSize: '1.25rem', padding: '0 8px' }}>~</span>
          {renderTimePicker(dateRange.end, (newValue) =>
            setDateRange((prev) => ({ ...prev, end: newValue }))
          )}
        </div>
      )}
     
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
