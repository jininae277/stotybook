import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** Primary UI component for user interaction */
export const Switch = ({ selected, disabled, onChange, label }) => {
  const [switchVal, setSwitchVal] = useState(selected);

  
  const handleSwitchChange = () => {
    if (disabled) return;
    const newValue = !switchVal;
    setSwitchVal(newValue);
    if (onChange) onChange(newValue);
  };

  const SwitchContainer = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 120px;
    height: 34px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? 0.6 : 1};
  `;


  const SwitchText = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height:34px;
    width:50%;
    font-weight: bold;
    color: ${(props) => (switchVal ? '#222' : '#fff')};
    transition: opacity 0.4s;
    background-color: ${switchVal ? '#ededed' : '#1ea7fd'};
    opacity: ${(props) => (props.active ? 1 : 0)};
  `;

  return (
    <div className="Switch-container">
      <SwitchContainer onClick={handleSwitchChange}>
        <SwitchText active={!switchVal}>ON</SwitchText>
        <SwitchText active={switchVal}>OFF</SwitchText>
      </SwitchContainer>
    </div>
  );
};

Switch.propTypes = {
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

Switch.defaultProps = {
  selected: false,
  disabled: false,
  onChange: null,
  label: '',
};
