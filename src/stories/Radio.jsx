import React from 'react';
import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const Radio = ({ label, checked, disabled, name, ...props }) => {
  const id = props.id || `radio-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className="radio-container">
      <input
        type="radio"
        id={id}
        checked={checked}
        disabled={disabled}
        name={name}
        {...props}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
};
