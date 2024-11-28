import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const Checkbox = ({label, checked, disabled, onChange, ...props}) => {
  // Manage checkbox state if not controlled (using `checked` prop)
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;  // Prevent changing if disabled
    const newChecked = !isChecked;  // Toggle checked state
    setIsChecked(newChecked);
    if (onChange) onChange(newChecked);  // Call parent onChange if provided
  };

  const id = props.id || `Checkbox-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,  // Optional callback to handle changes
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: null,
};
