"use strict";(self.webpackChunkstorybooks=self.webpackChunkstorybooks||[]).push([[791],{"./src/stories/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Delete:()=>Delete,Disabled:()=>Disabled,FullWidth:()=>FullWidth,Large:()=>Large,Primary:()=>Primary,Save:()=>Save,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Button",component:__webpack_require__("./src/stories/Button.jsx").$,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","secondary"],description:"default:화이트, primary:블루, secondary:그레이 "},size:{control:"select",options:["small","medium","large"],description:"크기는 소,중,대 로 지정"},icon:{control:"select",options:["save","delete",null],description:"icon이 들어가는 버튼"},isFullWidth:{control:"boolean",options:["isFullWidth",null],description:"Width 100%"},disabled:{control:"boolean",options:["disabled",null],description:"Button을 비활성화 상태로 설정합니다."}},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},Default={args:{variant:"default",label:"Button"}},Primary={args:{variant:"primary",label:"Button"}},Secondary={args:{variant:"secondary",label:"Button"}},Large={args:{size:"large",label:"Button"}},Small={args:{size:"small",label:"Button"}},FullWidth={args:{isFullWidth:"isFullWidth",label:"Button"}},Save={args:{variant:"primary",label:"저장",icon:"save",size:"medium"}},Delete={args:{variant:"secondary",label:"삭제",icon:"delete",size:"medium"}},Disabled={args:{variant:"primary",label:"Disabled Button",size:"medium",disabled:!0}},__namedExportsOrder=["Default","Primary","Secondary","Large","Small","FullWidth","Save","Delete","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default',\n    label: 'Button'\n  }\n}",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    label: 'Button'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'secondary',\n    label: 'Button'\n  }\n}",...Secondary.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    label: 'Button'\n  }\n}",...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small',\n    label: 'Button'\n  }\n}",...Small.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    isFullWidth: 'isFullWidth',\n    label: 'Button'\n  }\n}",...FullWidth.parameters?.docs?.source}}},Save.parameters={...Save.parameters,docs:{...Save.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    label: '저장',\n    icon: 'save',\n    size: \"medium\"\n  }\n}",...Save.parameters?.docs?.source}}},Delete.parameters={...Delete.parameters,docs:{...Delete.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'secondary',\n    label: '삭제',\n    icon: 'delete',\n    size: \"medium\"\n  }\n}",...Delete.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    label: 'Disabled Button',\n    size: 'medium',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}},"./src/stories/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{variant="default",backgroundColor=null,size="medium",label,icon=null,isFullWidth=!1,onClick=()=>{},...props}=_ref;return(0,jsx_runtime.jsx)(StyledButton,{type:"button",variant,size,style:backgroundColor&&{backgroundColor},icon,isFullWidth,onClick,...props,children:label})},StyledButton=styled_components_browser_esm.Ay.button`
  display: inline-block;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-weight: 700;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 5px 10px;
  width: ${_ref2=>{let{isFullWidth}=_ref2;return isFullWidth?"100%":"auto"}};
  height: ${_ref3=>{let{size}=_ref3;return"small"===size?"22px":"large"===size?"52px":"40px"}};
  line-height: ${_ref4=>{let{size}=_ref4;return"small"===size?"11px":"large"===size?"22px":"23px"}};
  font-size: ${_ref5=>{let{size}=_ref5;return"small"===size?"12px":"large"===size?"16px":"14px"}};

  /* Style based on the variant prop */
  background-color: ${_ref6=>{let{variant}=_ref6;return"primary"===variant?"#1ea7fd":"secondary"===variant?"#f3f3f3":"transparent"}};
  color: ${_ref7=>{let{variant}=_ref7;return"primary"===variant?"white":"secondary"===variant?"#333":"#000"}};
  border-color: ${_ref8=>{let{variant}=_ref8;return"primary"===variant?"#1ea7fd":"secondary"===variant?"#f3f3f3":"#ddd"}};

  box-shadow: ${_ref9=>{let{variant}=_ref9;return"secondary"===variant?"rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset":"none"}};

  &:disabled {
    cursor: unset;
    background-color: ${_ref10=>{let{variant}=_ref10;return"#eee"}};
    border-color: ${_ref11=>{let{variant}=_ref11;return"primary"===variant||"secondary"===variant?"#ddd":"#ccc"}};
     color: ${_ref12=>{let{variant}=_ref12;return"primary"===variant||"secondary"===variant?"#ddd":"#ccc"}};
  }

  /* iconBtn */
  &::before {
    content: '';
    display: ${_ref13=>{let{icon}=_ref13;return icon?"inline-block":"none"}};
    width: ${_ref14=>{let{size}=_ref14;return"small"===size?"12px":"large"===size?"20px":"16px"}};
    height: ${_ref15=>{let{size}=_ref15;return"small"===size?"12px":"large"===size?"20px":"16px"}};
    margin-right: 6px;
    vertical-align: middle;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${_ref16=>{let{icon}=_ref16;return"save"===icon?"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAopJREFUWIXNlztoFFEUhv+7RIMPEHwkrjaKGAOWKpL4QixULAI2CjZiIzYqYheIFipGtLCzsxPESrAUYmMT0cJ3omKRl6nyWKIx6n4WMwvHm5k7M2tYPd1y/vP//zn37swZ6R+HKwIGWiVtlNQiaY2kaUkjkl455yoLby8S3QxcBl6QHr+AfuAisGqhhMvAHeBHQDgppoGuDO5uoD0EOAJMpQh8B4biiXxOMDgBtAS4r8a4cWBrEuAC8NMjHQWuADsA5+GbgT3A7dj0uYB4r8fb5wNOeYDZeFzLAhO19SuApozOazEArLOA3fF4azEGdOQRzmEsU3wRMOid45aGiMegMwZQBQ42UrwEDBvQ/YaJx8BOr/u2BEw70F1A3L/t74ByGviGAfYn5NuAkTh/K4d4vs5NwRMD7knI93mEvQvSuSn6YAqOJeRbgdce8bxJFO7cFFZM0d4UTNBE3eIJBvYFcOV4pH8cR56xE70la/HUJx4wyeMZZpMmkdk5cNNgHtlcSdKY+R18+jnnxiUdkPQmIT0oab9zbjQhZ1+9n3x31427ZyEDpsafROqZA0uBGYM96gM6TLJKzneAMRG8cMAJw/8NWO4DSkQLRi0e5DEQ15YJ/M+BxcBHw/0wDXjam8LhvCYyDF7yeLelAZuA9wY8SWhnyyfeRbSs1uJeVkEn0QZUiy/ArjrFT3pcQ6Gj8gttzAI98y5Oev164K7H8RXYXsT9eeYvpWPANWAnUPLwzcAhohV+xqubpJ7lJiacIDnmiBaYl7GxagpugL+5R8BqoofUbIpAWlSIvqSW1C3uGdlEdA+eB7qdAx4DZ4GVRfiLfpy2SNogaa2kVkmTkoYlvXXOTRXh+m/iN1LO4q246uv4AAAAAElFTkSuQmCC)":"delete"===icon?"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAEnhJREFUeJzt3V3MbXld2PHvOC/McA5nJrGYASFhJjlTbZABFV/aauLUC51jtBIvtNEYbbVt2qSmN1NvSI2pImJi0sSmqRhrDWJ8axWIpHXEpjKGggwoitoCgcGZEmoG5hzlnHF4erGP7djgvJznefZ/7/37fJIdSOZi/fY/Z631fdZee+0CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAp3fd6gHgGTpXXajuqe6uXlLdVt24cCZ4vHq0+lD1YHV/9ebqsYUzARyEu6rXV5eqIy+vPXhdqn68Oh8Az9ot1eva/IW1+oDu5XUtryvVa6ubgx3kIwB20fnqF6uXrh4ETsBvVa+qHl49CDyZAGDXvKJ6a/X81YPACXqozT0s7109CPwFAcAuOV/9Zk7+HKaHqldWj6weBKo+a/UAcNXN1c/l5M/helH1pjb3t8By168eAK56TfWNq4eAU/bC6onqbYvnAB8BsBPuqt5X3bB6ENiCi20+7vJRAEv5CIBdcF9O/sxxtnr16iHAFQBWO9fm61HPXT0IbNGl6gV5YiALuQLAahdy8meeM9W9q4dgNgHAavesHgAW8W+fpQQAq929egBY5GWrB2A2AcBqd6weABa5c/UAzOYmQFa7XN20eghY4HJ+KIiFBACrHa0eABZyDGYZHwEAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAAD3bB6AFjM77HPdrR6AFjFFQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgv4W+PeeqC9U91d3VS6rbqhsXzgSw0uPVo9WHqger+6s3V48tnGkMAXD67qruq765eu7iWQB23Z9WP1P9UPVHi2c5aALg9NxSfX/1z6obFs8CsG8er360enX1qcWzHCQBcDrOV79YvXT1IAB77reqV1UPrx7k0AiAk/eK6q3V81cPAnAgHmpzD9V7Vw9ySATAyTpf/WZO/gAn7aHqldUjqwc5FL4GeHJurn4uJ3+A0/Ci6k1t7q/iBFy/eoAD8prqG1cPAXDAXlg9Ub1t8RwHwUcAJ+Ou6n252x/gtF1s83GrjwKOyUcAJ+O+nPwBtuFsm68GckyuABzfuTZfT/GQH4DtuFS9IE8MPBZXAI7vQk7+ANt0prp39RD7TgAc3z2rBwAYyLH3mATA8d29egCAgV62eoB9JwCO747VAwAMdOfqAfadmwCP73J10+ohAIa53OYBbFwjAXB8R6sHABjKOewYfAQAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMdMPqATg2v4cNrHK0egCunSsAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEA3rB6AYztaPQAA+8cVAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABcHxXVg8AMNDl1QPsOwFwfJ9cPQDAQJ9YPcC+EwDH98HVAwAM9IHVA+w7AXB8D64eAGCg96weYN8JgOO7f/UAAAP92uoB9t11qwc4AGerR6ozqwcBGOJSdXt1cfUg+8wVgOO7WL1x9RAAg7whJ/9jcwXgZJyv3lfduHoQgAN3pfr83AR4bNevHuBA/En1vOpvrR4E4MD9cPXzq4c4BK4AnJybq1+vvmz1IAAH6oHqq/IQoBMhAE7W7dU7qhevHgTgwPxx9SXVR1cPcijcBHiyHqm+rnpo9SAAB+Qj1dfk5H+iBMDJe2/1hdV/XT0IwAF4oM1f/r+zepBD4ybA0/Gn1c9Un66+uLpp7TgAe+dK9drqO/Lc/1MhAE7PE9Xbqp9o85Cgv5EQAHg6l6qfrL6lzd3+Tyyd5oC5CXB7zlYX2tzB+vLqjuq2RAEw15Xq0TY/qvbuNt+kekse8rMVAmC9o8Xb928A5nL8GcxNgAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQDesHgD2xLnqQnVPdXf1kuq2q//t0epD1YPV/dWbq8e2PuFhs/7AwTla/OKp3VW9vrrUM1/TS9WPV+cXzHtorP/pcvyBheyAu+mW6nXV41372l6pXlvdvOXZD4H13w7HH1jIDrh7zle/08mt8QPVC7b6Dvab9d8exx9YyA64W15RfayTX+ePVC/b4vvYV9Z/uxx/YCE74O443+mcfJ58Erp9a+9m/1j/7XP8gYXsgLvh5jZ3kZ/2er+zzefb/GXWfw3HH1jIDrgbXtf21vz7tvSe9on1X8PxBxayA653V8e72/zZvh7Lpegns/7rOP4M5kmAUPe13Ydina1evcXt7TrrDwtct3oAllfw9H8D56qHq+duebuX2nw1bfoT66z/Wo4/g7kCwHQX2v7Jp+pMde+C7e4a6w+LCACmu2fotneF9YdFBADT3b1w2x5MY/1hGQHAdHcs3PadC7e9K6w/LCIAmO7cwm3funDbu8L6wyLuwFzPXbhrWf+1rP9a1n8wVwAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQA011ZuO3LC7e9K6w/LCIAmO6TC7f9iYXb3hXWHxYRAEz3wYXb/sDCbe8K6w+LCACme3Dhtt+zcNu7wvrDIgKA6e5fuO1fW7jtXWH9YZHrVg9AR4u3P/3fwNnqkerMlrd7qbq9urjl7e4a67+W489grgAw3cXqjQu2+4acfMr6A4MdLX5R59t8HW1ba365unMr72w/WP91HH9gITvgbnht21vzH9zSe9on1n8Nxx9YyA64G26uHuj01/vt1XO29J72ifVfw/EHFrID7o7bqw93emv90epzt/Zu9o/13z7HH1jIDrhbXlZ9pJNf5w9XX7DF97GvrP92Of7AQnbA3fP86jc6uTV+e5u/bnlmrP/2OP7AQnbA3fSc6vvafFXsWtf2cvUD+cz5Wlj/7XD8gYXsgLvt9urHenYnoovVv81XzU6C9T9djj+DeQrTeqt3Av8Gnpmz1YXqq6qXV3dUt139b4+2+VGbd1e/Xr0lD5k5adb/dDj+DGbx17MDAqs4/gzmUcAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACAAAGEgAAMJAAAICBBAAADCQAAGAgAQAAAwkAABhIAADAQAIAAAYSAAAwkAAAgIEEAAAMJAAAYCABAAADCQAAGEgAAMBAAgAABhIAADCQAACAgQQAAAwkAABgIAEAAAMJAAAYSAAAwEACYL0ri7d/0+LtA2s8Z/H2Ly/e/ngCYL3HFm//3OLtA2vcunj7FxdvfzwBsN7qneCOxdsH1rhz8fY/uXj74wmA9VZfAXj54u0Da9y9ePur//gZTwCstzoA7lm8fWCNv7N4+64ALCYA1vvo4u1/XXVm8QzAdp2pvnbxDA8t3v54AmC99y/e/tnqmxfPAGzX32uz76/0B4u3P54AWG8XdoL7qhtXDwFsxU3Vv1g9RLtx7BtNAKy3CzvB+ep7Vg8BbMU/b/03AGo3jn2w1Lnq09XR4tefVV92yu8VWOtvVp9q/fHmiep5p/xeYS+8p/U75FH1cPXiU36vwBovbHPj3erjzFH126f8XnkGfASwG+5fPcBVt1dvql60ehDgRL24+tXqc1cPctWuHPNgua9vfZE/+fWx6itP9R0D2/Llba7urT6uPPl176m+Y9gjt1aPt36nfPLrU9Wr84wA2Fc3Vd/bbnzm/+TX4/n8H/6S32j9jvmZXg9X/zghAPviTPXd1f9s/fHjM71c/of/z3e1fsd8qtdj1Rurf1h9afU5+SlhWO2mNvvil1b/qPrZNvvq6uPFU72+81RWgmftutUD8H/d2uav7VtWDwJwSj5VvaB6dPUg+BbALvlE9SurhwA4Rf8xJ/+dIQB2y79fPQDAKfqp1QPw//gIYLdcV723eunqQQBO2O9VX9DmyafsAFcAdstR9ZrVQwCcgu/PyX+nuAKwe66vfr/ND/QAHIL/UX1em98AYEe4ArB7nqh+aPUQACfoX+Xkv3NcAdhN11fvrF6+ehCAY/rt6ksSADvHFYDd9ESbB+74vAzYZ5+u/mlO/jtJAOyud1Q/uXoIgGN4ffXA6iH4zHwEsNv+WvX+6rNXDwLwLH28zY1//3v1IHxmrgDsto9X397m64EA++Ko+gc5+e+061cPwNP6oza/E/DlqwcBeIZ+pPrXq4fgqfkIYD/c2ObngkUAsOveUX1FdWX1IDw1AbA/XtJmx3r+4jkA/iofq15ZfXj1IDw99wDsjw9V97b5rW+AXfNY9bU5+e8NAbBf3ln93ery6kEAnuRK9U1tHvrDnnAT4P75YJvnar8qH+EA6326+tbql1cPwrMjAPbT7159fUN1w+JZgLmuVN9W/ezqQXj2/AW53+6pfqk6t3oQYJyLbS77v3X1IFwbAbD/vqh6S/U5qwcBxvhf1YXqXasH4dq5CXD/vav64urtqwcBRvjvbZ5J4uS/59wDcBg+Wf1Um8dvfmWu7AAn76jN0/2+JY/4PQhOFIfn66ufyA8IASfn49V3Vr+yehBOjisAh+cPqn9X3dLmiVwiD7hWR9VPt/nG0bsXz8IJc3I4bF9U/Zs2IQDwbDxY/ZPcX3Sw3AR42N7V5madv9/mVwUBns4fVt+Rm4sPnisAc3xWm6/t/MvqC9eOAuyg361+uHpD9eeLZ2ELBMA811VfU317mxsGb1k7DrDQn1X/qc23iH61zWf+DCEAZru1zZO8vrX623msMEzw59V/q/5D9QvVJ9aOwyoCgL9wps39Al999fWK3CMCh+ID1X+5+vrP1aNrx2EXCAD+Ks+r/np1V/V5V///i6qzV1+3Xf3fm1YNCHSlzTP5H736vxerj7S5ke/9bb4W/IfVY6sGBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPbb/wE/IUDLXV5afgAAAABJRU5ErkJggg==)":"none"}};
  }
`;Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"Button variant - default, primary, secondary",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1}]},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"enum",value:[{value:"'save'",computed:!1},{value:"'delete'",computed:!1}]},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"Optional click handler",type:{name:"func"},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0}}}}}]);
//# sourceMappingURL=stories-Button-stories.36f76edc.iframe.bundle.js.map