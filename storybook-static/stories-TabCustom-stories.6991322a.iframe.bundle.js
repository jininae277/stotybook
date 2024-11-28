"use strict";(self.webpackChunkstorybooks=self.webpackChunkstorybooks||[]).push([[633],{"./src/stories/TabCustom.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabCustom_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),proxy=__webpack_require__("./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TabCustom=()=>{const[currentTab,clickTab]=(0,react.useState)(0),menuArr=[{name:"Tab1",content:"Tab menu ONE"},{name:"Tab2",content:"Tab menu TWO"},{name:"Tab3",content:"Tab menu THREE"}],[direction,setDirection]=(0,react.useState)(1);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(TabMenu,{children:menuArr.map(((el,index)=>(0,jsx_runtime.jsxs)("li",{className:index===currentTab?"submenu focused":"submenu",onClick:()=>(index=>{clickTab(index)})(index),children:[el.name,currentTab===index&&(0,jsx_runtime.jsx)(TabIndicator,{layoutId:"tabIndicator"})]},index)))}),(0,jsx_runtime.jsx)(Desc,{children:(0,jsx_runtime.jsx)("p",{children:menuArr[currentTab].content})})]})},TabMenu=styled_components_browser_esm.Ay.ul`
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
`,TabIndicator=(0,styled_components_browser_esm.Ay)(proxy.P.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1976d2;
`,Desc=styled_components_browser_esm.Ay.div`
  padding: 10px 20px;
  //text-align: center;
`;TabCustom.__docgenInfo={description:"",methods:[],displayName:"TabCustom"};const TabCustom_stories={title:"Example/TabCustom",component:TabCustom,tags:["autodocs"]},Default=()=>(0,jsx_runtime.jsx)(TabCustom,{}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <TabCustom />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-TabCustom-stories.6991322a.iframe.bundle.js.map