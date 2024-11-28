import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import saveIcon from '../icon/icon-save.png';
import deleteIcon from '../icon/icon-delete.png';

/** Primary UI component for user interaction */
export const Button = ({ 
  variant = 'default', 
  backgroundColor = null, 
  size = 'medium', 
  label, 
  icon = null, 
  isFullWidth = false, 
  onClick = () => {}, 
  ...props 
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      size={size}
      style={backgroundColor && { backgroundColor }}
      icon={icon}
      isFullWidth={isFullWidth} 
      onClick={onClick}
      {...props}
    > 
      {label}
    </StyledButton>
  );
};

// Define the styled component with conditional styling based on props
const StyledButton = styled.button`
  display: inline-block;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-weight: 700;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 5px 10px;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
  height: ${({ size }) => (size === 'small' ? '22px' : size === 'large' ? '52px' : '40px')};
  line-height: ${({ size }) => (size === 'small' ? '11px' : size === 'large' ? '22px' : '23px')};
  font-size: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '16px' : '14px')};

  /* Style based on the variant prop */
  background-color: ${({ variant }) => 
    variant === 'primary' ? '#1ea7fd' : 
    variant === 'secondary' ? '#f3f3f3' : 
    'transparent'};
  color: ${({ variant }) => 
    variant === 'primary' ? 'white' : 
    variant === 'secondary' ? '#333' : 
    '#000'};
  border-color: ${({ variant }) => 
    variant === 'primary' ? '#1ea7fd' : 
    variant === 'secondary' ? '#f3f3f3' : 
    '#ddd'};

  box-shadow: ${({ variant }) => 
    variant === 'secondary' ? 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset' : 'none'};

  &:disabled {
    cursor: unset;
    background-color: ${({ variant }) => 
      variant === 'primary' ? '#eee' : 
      variant === 'secondary' ? '#eee' : '#eee'};
    border-color: ${({ variant }) => 
      variant === 'primary' ? '#ddd' : 
      variant === 'secondary' ? '#ddd' : '#ccc'};
     color: ${({ variant }) => 
      variant === 'primary' ? '#ddd' : 
      variant === 'secondary' ? '#ddd' : '#ccc'};
  }

  /* iconBtn */
  &::before {
    content: '';
    display: ${({ icon }) => (icon ? 'inline-block' : 'none')};
    width: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '20px' : '16px')};
    height: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '20px' : '16px')};
    margin-right: 6px;
    vertical-align: middle;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${({ icon }) => 
      icon === 'save' ? `url(${saveIcon})` : 
      icon === 'delete' ? `url(${deleteIcon})` : 'none'};
  }
`;

Button.propTypes = {
  /** Button variant - default, primary, secondary */
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /* icon 여부 */
  icon: PropTypes.oneOf(['save', 'delete']),
  /** Optional click handler */
  onClick: PropTypes.func,
};

export default Button;
