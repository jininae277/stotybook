import React, { useState } from 'react';

import styled from 'styled-components';
import SelectCustom from './SelectCustom'; 
import TypeInput from './TypeInput'; 
import { Button } from './Button';
import  CustomDatePicker from './CustomDatePicker';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { fullWidth } from './SelectCustom.stories';



/** Primary UI component for user interaction */
export const SearchBoxCon = ({ variant, backgroundColor, size, label, icon, isFullWidth, ...props }) => {
  const [isDetailVisible, setDetailVisible] = useState(false);

  const toggleDetailVisibility = () => {
    setDetailVisible(prev => !prev);
  };
  
  return (
    <SearchBox>
      <filter_wrap>
        <b>검색어</b>
        <div>
          <SelectCustom
            //fullWidth
            placeholder="선택하세요"
            selected={[]}
          />
          <TypeInput
            //fullWidth
            onSearch={() => {}}
            placeholder="검색어 입력"
            type="search" 
          />
        </div>
      </filter_wrap>
      <filter_wrap>
        <b>검색어</b>
        <div>
          <SelectCustom
            fullWidth
            placeholder="선택하세요"
            selected={[]}
          />
          <SelectCustom
            fullWidth
            placeholder="선택하세요"
            selected={[]}
          />  
          <SelectCustom
            fullWidth
            placeholder="선택하세요"
            selected={[]}
          />  
          <SelectCustom
            fullWidth
            placeholder="선택하세요"
            selected={[]}
          />  
        </div>         
      </filter_wrap>

      {isDetailVisible &&(
        <div>
           <filter_wrap_detail>
            <b>검색어</b>
            <div>
              <SelectCustom
                fullWidth
                placeholder="선택하세요"
                selected={[]}
              />
              <SelectCustom
                fullWidth
                placeholder="선택하세요"
                selected={[]}
              />  
              <SelectCustom
                fullWidth
                placeholder="선택하세요"
                selected={[]}
              />  
              <SelectCustom
                fullWidth
                placeholder="선택하세요"
                selected={[]}
              />  
            </div>         
          </filter_wrap_detail>
          <filter_wrap_detail>
              <b>검색어</b>
              <div>
                <SelectCustom
                  placeholder="선택하세요"
                  selected={[]}
                />
                <CustomDatePicker type="multiButtons" />
              </div>
          </filter_wrap_detail>
        </div>
      )}
      <buttonWrap>
        <div>
          <Button
            label="초기화"
            variant=""
          />
          <Button
            label=" 검색 "
            onClick={() => {}}
            variant="primary"
          />
        </div>
        <button onClick={toggleDetailVisibility}>상세검색{isDetailVisible ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}</button>
      </buttonWrap>
    </SearchBox>
  );
};


const SearchBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  
  filter_wrap, filter_wrap_detail{
    display:flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;

    &:last-of-type{
      border-bottom:unset;
    }

    b{
      width:100px;
      color:#222;
    }

    >div{
      display:flex;
      width: calc(100% - 100px);
      gap:10px;  
    }
  }
    filter_wrap_detail{
      
      &:first-of-type{
        border-top:1px solid #ccc;
      }
    }
  
  buttonWrap{
    display:flex;
    align-items: center;
    padding: 10px 20px;
    border-top: 1px solid #ccc;
    justify-content: center;
    
    >div{
      display:flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: calc(100% - 70px);
      margin-left: 70px;
   
      >Button{
       width: 70px;
      }
    }

    >button{
      cursor:pointer;
      display: flex;
      align-items: center;
      margin-left: auto;
      width: 95px;
      border: 0;
      background: none;
      font-size: 14px;
    }

  }


  
`;


SearchBox.defaultProps = {
  variant: 'default',
  backgroundColor: null,
  size: 'medium',
  icon: null,
  onClick: undefined,
};

