"use strict";(self.webpackChunkstorybooks=self.webpackChunkstorybooks||[]).push([[88],{"./src/stories/ButtonGroup.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,DisabledSelected:()=>DisabledSelected,Selected:()=>Selected,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/ButtonGroup.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/ButtonGroup",component:_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.e,parameters:{},tags:["autodocs"],argTypes:{selectedValue:{control:"select",options:["버튼1","버튼2","버튼3","버튼4"]},disabled:{control:"boolean"}}},Template=_ref=>{let{buttons=[],selectedValue="",disabled=!1,...args}=_ref;const[selectedValueState,setSelectedValueState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedValue);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.e,{...args,buttons,selectedValue:selectedValueState,onChange:value=>{setSelectedValueState(value),console.log(`Selected: ${value}`)},disabled})},Default=Template.bind({});Default.args={buttons:[{label:"버튼1",value:"버튼1"},{label:"버튼2",value:"버튼2"},{label:"버튼3",value:"버튼3"},{label:"버튼4",value:"버튼4"}],selectedValue:"",disabled:!1},Default.parameters={docs:{description:{story:"기본적으로 선택되지 않은 상태로 시작하며, 클릭하여 선택하거나 해제할 수 있습니다."}}};const Selected=Template.bind({});Selected.args={...Default.args,selectedValue:"버튼1"},Selected.parameters={docs:{description:{story:"선택되었을때 상태를 표시합니다."}}};const Disabled=Template.bind({});Disabled.args={...Default.args,disabled:!0},Disabled.parameters={docs:{description:{story:"비활성화 상태로 시작하며, 클릭해도 변경되지 않습니다."}}};const DisabledSelected=Template.bind({});DisabledSelected.args={...Default.args,selectedValue:"버튼2",disabled:!0},DisabledSelected.parameters={docs:{description:{story:"비활성화 상태에서 선택된 상태로 시작하며, 클릭해도 변경되지 않습니다."}}};const __namedExportsOrder=["Default","Selected","Disabled","DisabledSelected"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  buttons = [],\n  selectedValue = '',\n  disabled = false,\n  ...args\n}) => {\n  const [selectedValueState, setSelectedValueState] = useState(selectedValue);\n  const handleChange = value => {\n    setSelectedValueState(value);\n    console.log(`Selected: ${value}`);\n  };\n  return <ButtonGroup {...args} buttons={buttons} selectedValue={selectedValueState} onChange={handleChange} disabled={disabled} />;\n}",...Default.parameters?.docs?.source}}},Selected.parameters={...Selected.parameters,docs:{...Selected.parameters?.docs,source:{originalSource:"({\n  buttons = [],\n  selectedValue = '',\n  disabled = false,\n  ...args\n}) => {\n  const [selectedValueState, setSelectedValueState] = useState(selectedValue);\n  const handleChange = value => {\n    setSelectedValueState(value);\n    console.log(`Selected: ${value}`);\n  };\n  return <ButtonGroup {...args} buttons={buttons} selectedValue={selectedValueState} onChange={handleChange} disabled={disabled} />;\n}",...Selected.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"({\n  buttons = [],\n  selectedValue = '',\n  disabled = false,\n  ...args\n}) => {\n  const [selectedValueState, setSelectedValueState] = useState(selectedValue);\n  const handleChange = value => {\n    setSelectedValueState(value);\n    console.log(`Selected: ${value}`);\n  };\n  return <ButtonGroup {...args} buttons={buttons} selectedValue={selectedValueState} onChange={handleChange} disabled={disabled} />;\n}",...Disabled.parameters?.docs?.source}}},DisabledSelected.parameters={...DisabledSelected.parameters,docs:{...DisabledSelected.parameters?.docs,source:{originalSource:"({\n  buttons = [],\n  selectedValue = '',\n  disabled = false,\n  ...args\n}) => {\n  const [selectedValueState, setSelectedValueState] = useState(selectedValue);\n  const handleChange = value => {\n    setSelectedValueState(value);\n    console.log(`Selected: ${value}`);\n  };\n  return <ButtonGroup {...args} buttons={buttons} selectedValue={selectedValueState} onChange={handleChange} disabled={disabled} />;\n}",...DisabledSelected.parameters?.docs?.source}}}},"./src/stories/ButtonGroup.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ButtonGroup});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButtonGroup=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div`
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
`,ButtonGroup=_ref=>{let{buttons=[],selectedValue="",onChange,disabled=!1}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledButtonGroup,{children:buttons.map((button=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:selectedValue===button.value?"selected":"",onClick:()=>{return value=button.value,void(disabled||onChange(value));var value},disabled,children:button.label},button.value)))})};ButtonGroup.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{buttons:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},value:{name:"string",required:!0}}}},required:!1},selectedValue:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!0}}}}}]);
//# sourceMappingURL=stories-ButtonGroup-stories.911096a4.iframe.bundle.js.map