import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';  // framer-motion을 임포트합니다.

export const TabCustom = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: 'Tab1', content: 'Tab menu ONE' },
    { name: 'Tab2', content: 'Tab menu TWO' },
    { name: 'Tab3', content: 'Tab menu THREE' },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index); 
  };

  const [direction, setDirection] = useState(1);

  const changeDirection = (newIndex) => {
    setDirection(currentTab - newIndex < 0 ? 1 : -1);
  };

  return (
    <div>
      <TabMenu>
        {menuArr.map((el, index) => (
          <li
            key={index}
            className={index === currentTab ? 'submenu focused' : 'submenu'}
            onClick={() => selectMenuHandler(index)}
          >
            {el.name}
            {currentTab === index && <TabIndicator layoutId="tabIndicator" />}
          </li>
        ))}
      </TabMenu>
      <Desc>
        <p>{menuArr[currentTab].content}</p>
      </Desc>
    </div>
  );
};

const TabMenu = styled.ul`
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-top: 10px;
  padding: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  .submenu {
    //width: calc(100% / 3);
    width: 100px;
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    text-align: center;
    cursor: pointer;
    position: relative;
  }

  .focused {
    background-color: rgb(255, 255, 255);
    color: #1976d2;
  }
`;

const TabIndicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1976d2;
`;

const Desc = styled.div`
  padding: 10px 20px;
  //text-align: center;
`;
