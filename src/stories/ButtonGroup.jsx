import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import styled from 'styled-components';

// 스타일링된 ButtonGroup
const StyledButtonGroup = styled.div`
  display: flex;

  > button {
    box-sizing: border-box;
    cursor: pointer;
    height: 40px;
    padding: 0 20px;
    border: 1px solid rgb(201, 205, 207);
    border-radius: 0;
    border-left:unset;
    background-color:#fff;

    &:first-of-type {
      border-radius: 4px 0 0 4px;
       border-left:1px solid rgb(201, 205, 207);
    }
    &:last-of-type {
      border-radius: 0 4px 4px 0;
    }
    &.selected {
      color: #fff;
      background: rgb(2, 156, 253);
      border-color: rgb(2, 156, 253);
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #ededed;;
      border-color: rgb(201, 205, 207);
    }
    &.selected:disabled {
      background-color: #ddd;
    }
  }
`;

export const ButtonGroup = ({ 
    buttons = [],
    selectedValue = '',
    onChange,
    disabled = false,
  }) => {
    const handleButtonClick = (value) => {
      if (!disabled) {
        onChange(value);
      }
  };

  return (
    <StyledButtonGroup>
      {buttons.map((button) => (
        <button
          key={button.value}
          className={selectedValue === button.value ? 'selected' : ''}
          onClick={() => handleButtonClick(button.value)}
          disabled={disabled}
        >
          {button.label}
        </button>
      ))}
    </StyledButtonGroup>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

/* ButtonGroup.defaultProps = {
  buttons: [],
  selectedValue: '',
  disabled: false,
};
 */