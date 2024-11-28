import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import MenuIcon from '@mui/icons-material/Menu';
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import HelpIcon from "@mui/icons-material/Help";
import styled from 'styled-components';
import StarsIcon from '@mui/icons-material/Stars';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import TypeInput from "./TypeInput"; 


const favoriteMenus = [
  {
    title: "즐겨찾기 한 메뉴명1",

    
    depths: ["1depth", "2depth", "3depth"]
  },
  {
    title: "즐겨찾기 한 메뉴명2",
    depths: ["1depth", "2depth", "3depth", "4depth"]
  },
  {
    title: "즐겨찾기 한 메뉴명3",
    depths: ["1depth", "2depth", "3depth", "4depth"]
  },
  {
    title: "즐겨찾기 한 메뉴명4",
    depths: ["1depth", "2depth", "3depth", "4depth"]
  },
  {
    title: "즐겨찾기 한 메뉴명5",
    depths: ["1depth", "2depth", "3depth", "4depth"]
  },
  {
    title: "즐겨찾기 한 메뉴명6",
    depths: ["1depth", "2depth", "3depth", "4depth"]
  },
];

const notifications = [
  { id: 1, date: '2024-01-01 12:34', content: '알림내용입니다. 알림내용입니다. 알림내용입니다. 알림내용입니다. 알림내용입니다.' },
  { id: 2, date: '2024-02-01 14:00', content: '다른 알림 내용입니다. 내용이 길어질 경우 잘려서 표시됩니다.' },
  { id: 3, date: '2024-03-01 16:10', content: '또 다른 알림 내용이 이곳에 들어갑니다. 이 내용도 마찬가지로 길면 \'...\'이 표시됩니다.' },
];


export default function Header({ user, onLogin, onLogout, onCreateAccount }) {
  const [selectedButton, setSelectedButton] = useState(null); 

  const handleButtonClick = (button) => {
    if (selectedButton === button) {
      setSelectedButton(null); 
    } else {
      setSelectedButton(button); 
    }
  };

  return (
    <HeaderWrap>
      <div className="left">
        <MenuIcon sx={{  fontSize: "40px" }}/>
        <h1>로고영역</h1>
      </div>
      <div className="menu">
        <Dashboard>Dashboard</Dashboard>
        <MenuItem>1depth</MenuItem>
        <MenuItem>1depth</MenuItem>
        <MenuItem>1depth</MenuItem>
        <MenuItem>1depth</MenuItem>
        <MenuItem>1depth</MenuItem>
      </div>
      <div className="right">
        <div>
          <button  onClick={() => handleButtonClick('stars')}>
            <StarsIcon sx={{ fill: "#ccc", fontSize: "40px" }} />
          </button>
          {selectedButton === 'stars' && <Popup>
              <Popup_Header>
                <Popup_Tit>즐겨찾기</Popup_Tit>
                <SettingsIcon/>
              </Popup_Header>
              <Popup_Content>
                <Stars>
                  {favoriteMenus.map((menu, index) => (
                    <li key={index}>
                      <b>{menu.title}</b>
                      <div>
                        {menu.depths.map((depth, i) => (
                          <span key={i}>{depth}</span>
                        ))}
                      </div>
                    </li>
                  ))}
                </Stars>
              </Popup_Content>
            </Popup>}

          <button onClick={() => handleButtonClick('notifications')}>
              <CircleNotificationsIcon sx={{ fill: "#ccc", fontSize: "40px" }} />
          </button>
          {selectedButton === 'notifications' && <Popup>
              <Popup_Header>
                <Popup_Tit>알림</Popup_Tit>
                <SettingsIcon/>
              </Popup_Header>
              <Popup_Content>
                <button className='view_all'>전체보기 &gt;</button>
                <Notifi>
                {notifications.map(notification => (
                  <li key={notification.id}>
                    <span>{notification.date}</span>
                    <div>{notification.content}</div>
                  </li>
                ))}
                </Notifi>
              </Popup_Content>
            </Popup>}
          
          <button onClick={() => handleButtonClick('help')}>
            <HelpIcon sx={{ fill: "#ccc", fontSize: "40px" }} />
          </button>
          {selectedButton === 'help' && <Popup>
            <Popup_Header>
              <Popup_Tit>도움말</Popup_Tit>
            </Popup_Header>  
            <Popup_Content>
              <div>
                <button>전체</button>
                <button>카테고리</button>
                <button>카테고리</button>
                <button>카테고리</button>
                <button>카테고리</button>
                <button>카테고리</button>
              </div>
              <TypeInput
              onSearch={() => {}}
              placeholder="검색어 입력"
              type="search"
              />
             
            </Popup_Content>
          </Popup>}
        </div>
        <div>
        <button><WidgetsIcon sx={{ fill: "rgb(41, 44, 45)", fontSize: "40px" }}/></button>
        <button><PersonIcon sx={{ fill: "rgb(41, 44, 45)", fontSize: "40px" }}/></button>
      </div>
    </div>

      {/* Optional login/logout buttons */}
     {/*  <div className="auth-buttons">
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div> */}
    </HeaderWrap>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

const HeaderWrap = styled.div`
  ol, ul {
    list-style: none;
    margin: 0;
    padding:0;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 54px;
  padding: 0 20px;

  >*{
    margin: 0;
    padding:0;
    line-height: 1.2;
  }
  h1{
    margin: 0;
  }
  .left, .right {
    display: flex;
    align-items: center;
    gap:15px;
  }

   .right {

    button{
      padding: 0;
      margin: 0;
      background: none;
      border: unset;
      cursor:pointer;

      &:focus, &:active{
        svg {
          fill: #397dfa;
        }
      }
      &:hover svg {
        fill: #397dfa;
      }
    }

    >div{
      position: relative;
      display: flex;
      align-items: center;
      gap:7px;

      &:first-of-type{
        &:after{
          content:'';
          width:1px;
          height:30px;
          display:inline-block;
          background:#ddd;
          margin-left:8px;
        }
      }
    }
    
   }

  .menu {
    display: flex;
    gap: 100px;
    width:70%;
  }

  .auth-buttons {
    display: flex;
    align-items: center;
  }
`;

const Dashboard = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
  
  &:hover {
    color: #007bff
  }
`
const Popup = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  position: absolute;
  z-index: 1000;
  width: 300px;
  left: -70px;
  top: 60px;
  border-radius:10px;
`
const Popup_Header= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);
`
const Popup_Tit= styled.div`
  font-weight:600;
  font-size:18px;
`

const Popup_Content= styled.div`
  
  .view_all{
    display: flex;
    margin-left: auto !important;
    padding: 10px 20px !important;
  }

  ul{
    overflow-y: scroll;
    max-height: 400px;
    height: fit-content;
  
    li{
      padding: 20px;
      border-bottom:1px solid #ddd;
      
      &:last-of-type{
        border-bottom:none;
      }
    }
  }
`
const Stars = styled.ul`
  li{
    display: flex;
    flex-direction: column;
    gap: 5px;

    b{
      font-weight: 600;
      color: #222;
    }

  >div{
    display:flex;
    gap:10px;
    align-items: center;

    span{
      font-size: 13px;
      color: rgb(121, 129, 134);
      
      &:after{
        content:'>';
        width:3px;
        display:inline-block;
        margin-left:8px;
      }
    
      &:last-of-type{
        &:after{
          display:none;
        }
      }
    }
  }
}
`

const Notifi = styled.ul`
  li{
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    span{
      font-size: 13px;
      color: rgb(121, 129, 134);
    }
    >div{
      white-space: nowrap;  
      overflow: hidden;     
      text-overflow: ellipsis; 
      max-width: 300px; 
    }
  }
`