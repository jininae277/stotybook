"use strict";(self.webpackChunkstorybooks=self.webpackChunkstorybooks||[]).push([[727],{"./src/stories/Switch.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisabledOff:()=>DisabledOff,DisabledOn:()=>DisabledOn,Off:()=>Off,On:()=>On,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Switch_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Switch=_ref=>{let{selected,disabled,onChange,label}=_ref;const[switchVal,setSwitchVal]=(0,react.useState)(selected),SwitchContainer=styled_components_browser_esm.Ay.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 120px;
    height: 34px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    cursor: ${disabled?"not-allowed":"pointer"};
    opacity: ${disabled?.6:1};
  `,SwitchText=styled_components_browser_esm.Ay.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height:34px;
    width:50%;
    font-weight: bold;
    color: ${props=>switchVal?"#222":"#fff"};
    transition: opacity 0.4s;
    background-color: ${switchVal?"#ededed":"#1ea7fd"};
    opacity: ${props=>props.active?1:0};
  `;return(0,jsx_runtime.jsx)("div",{className:"Switch-container",children:(0,jsx_runtime.jsxs)(SwitchContainer,{onClick:()=>{if(disabled)return;const newValue=!switchVal;setSwitchVal(newValue),onChange&&onChange(newValue)},children:[(0,jsx_runtime.jsx)(SwitchText,{active:!switchVal,children:"ON"}),(0,jsx_runtime.jsx)(SwitchText,{active:switchVal,children:"OFF"})]})})};Switch.defaultProps={selected:!1,disabled:!1,onChange:null,label:""},Switch.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Switch",props:{selected:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onChange:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},label:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};const Switch_stories={title:"Example/Switch",component:Switch,parameters:{},tags:["autodocs"],argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},Template=args=>(0,jsx_runtime.jsx)(Switch,{...args}),Off=Template.bind({});Off.args={label:"Off",selected:!0,disabled:!1};const On=Template.bind({});On.args={label:"On",selected:!1,disabled:!1};const DisabledOff=Template.bind({});DisabledOff.args={label:"DisabledOff",selected:!0,disabled:!0};const DisabledOn=Template.bind({});DisabledOn.args={label:"DisabledOn",selected:!1,disabled:!0};const __namedExportsOrder=["Off","On","DisabledOff","DisabledOn"];Off.parameters={...Off.parameters,docs:{...Off.parameters?.docs,source:{originalSource:"args => <Switch {...args} />",...Off.parameters?.docs?.source}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:"args => <Switch {...args} />",...On.parameters?.docs?.source}}},DisabledOff.parameters={...DisabledOff.parameters,docs:{...DisabledOff.parameters?.docs,source:{originalSource:"args => <Switch {...args} />",...DisabledOff.parameters?.docs?.source}}},DisabledOn.parameters={...DisabledOn.parameters,docs:{...DisabledOn.parameters?.docs,source:{originalSource:"args => <Switch {...args} />",...DisabledOn.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-Switch-stories.128ac74d.iframe.bundle.js.map