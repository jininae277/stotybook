import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from './Button';

/** Primary UI component for user interaction */
export const Modal = ({ size, label, isOpen, onClose, children }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); 
  };


  const handleClose = () => {
    setIsModalOpen(false); 
    if (onClose) onClose(); 
  };

  return (
    <div>
         <button onClick={toggleModal}>모달 열기</button>
        
         {isModalOpen && (
          <ModalWrap
            size={size}
            label={label}
            isOpen={isModalOpen}
          >
            <div className="modal">
              <modalHeader>
                <modalTit>타이틀</modalTit>
                <button className="modal-close" onClick={handleClose}><CloseIcon/></button>
              </modalHeader>
              
              <modalContent>{children || '모달 내용 모달 내용 모달 내용 모달 내용 모달 내용'}</modalContent>
              <modalBottom>
                <Button
                    label="버튼1"
                    onClick={() => {}}
                    variant="primary"
                />
                <Button
                    label="버튼2"
                    onClick={() => {}}
                    variant="secondary"
                />
              </modalBottom>
            </div>
          </ModalWrap>
      )}
    </div>
  );
};

const ModalWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal {
      display: flex;
      flex-direction: column;
      background: white;
      border-radius: 8px;
      box-shadow: inset;
      position: relative;
      width: ${({ size }) => (size === 'small' ? '200px' : size === 'large' ? '400px' : size === 'extraLarge' ? '500px' : '300px')};
     // height: 100%;
      min-height: 200px;
      max-height: 400px;

      > modalHeader{
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        font-weight:600;

        .modal-close {
          width: 24px;
          height: 24px;
          border: 0;
          padding:0;
          background: none;
        }
      }
        
      > modalContent{
          padding:20px;
          overflow-y: scroll;
      }
      
      > modalBottom{
        display:flex;
        padding: 10px 20px;
        justify-content: flex-end;
        gap: 5px;
        margin-top:auto;
      }

    }
      

    
`;

Modal.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge']),
  label: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  size: 'medium',
  isOpen: false,
  onClose: undefined,
  children: null,
};

export default Modal;
