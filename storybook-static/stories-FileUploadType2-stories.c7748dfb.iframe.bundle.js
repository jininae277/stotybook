"use strict";(self.webpackChunkstorybooks=self.webpackChunkstorybooks||[]).push([[860],{"./src/stories/FileUploadType2.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisabledFileUpload:()=>DisabledFileUpload,FileUploadWithExtensions:()=>FileUploadWithExtensions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileUploadType2_stories});var react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FileUploadType2=_ref=>{let{maxSize=5242880,maxCnt=5,disabled=!1,helpText=!0,helpTextCustom="지원 가능한 파일 안내문구 영역",showFileExtensions=!0,accept="*/*"}=_ref;const[files,setFiles]=(0,react.useState)([]);return(0,jsx_runtime.jsxs)("div",{style:{width:"100%",textAlign:"left",fontFamily:"Arial, sans-serif"},children:[(0,jsx_runtime.jsxs)(Button.A,{variant:"outlined",component:"label",disabled,style:{marginBottom:"10px",display:"block",width:"100px",textAlign:"center",height:"36px",lineHeight:"25px"},children:["파일 첨부",(0,jsx_runtime.jsx)("input",{type:"file",accept,onChange:event=>{const selectedFiles=event.target.files,newFiles=[];for(let i=0;i<selectedFiles.length;i++){const file=selectedFiles[i];file.size<=maxSize&&newFiles.length<maxCnt&&newFiles.push({name:file.name,extension:file.name.split(".").pop().toLowerCase()})}setFiles((prevFiles=>[...prevFiles,...newFiles].slice(0,maxCnt)))},multiple:!0,hidden:!0})]}),helpText&&(0,jsx_runtime.jsx)(Typography.A,{variant:"body2",style:{color:"red",marginBottom:"10px",fontSize:"14px"},children:helpTextCustom}),(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:files.map(((file,index)=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"center",padding:"5px 10px",border:"1px solid #ddd",borderRadius:"4px",backgroundColor:"#f9f9f9"},children:[(0,jsx_runtime.jsxs)(Typography.A,{variant:"body2",style:{marginRight:"8px"},children:[file.name,showFileExtensions&&`, ${file.extension.toUpperCase()}`]}),(0,jsx_runtime.jsx)("button",{onClick:()=>(index=>{setFiles((prevFiles=>prevFiles.filter(((_,i)=>i!==index))))})(index),style:{background:"none",border:"none",color:"black",cursor:"pointer",fontSize:"16px"},children:"×"})]},index)))})]})},stories_FileUploadType2=FileUploadType2;FileUploadType2.__docgenInfo={description:"",methods:[],displayName:"FileUploadType2",props:{maxSize:{defaultValue:{value:"5 * 1024 * 1024",computed:!1},required:!1},maxCnt:{defaultValue:{value:"5",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},helpText:{defaultValue:{value:"true",computed:!1},required:!1},helpTextCustom:{defaultValue:{value:"'지원 가능한 파일 안내문구 영역'",computed:!1},required:!1},showFileExtensions:{defaultValue:{value:"true",computed:!1},required:!1},accept:{defaultValue:{value:"'*/*'",computed:!1},required:!1}}};const FileUploadType2_stories={title:"Example/FileUploadType2",component:stories_FileUploadType2,parameters:{},tags:["autodocs"]},Template=args=>(0,jsx_runtime.jsx)(stories_FileUploadType2,{...args}),FileUploadWithExtensions=Template.bind({});FileUploadWithExtensions.args={maxSize:10485760,maxCnt:5,accept:"*/*",showFileExtensions:!0,helpText:!0,helpTextCustom:"지원되는 파일 형식: 모든 파일 형식, 최대 10MB"};const DisabledFileUpload=Template.bind({});DisabledFileUpload.args={maxSize:10485760,maxCnt:5,accept:"*/*",showFileExtensions:!0,helpText:!0,helpTextCustom:"지원되는 파일 형식: 모든 파일 형식, 최대 10MB",disabled:!0};const __namedExportsOrder=["FileUploadWithExtensions","DisabledFileUpload"];FileUploadWithExtensions.parameters={...FileUploadWithExtensions.parameters,docs:{...FileUploadWithExtensions.parameters?.docs,source:{originalSource:"args => <FileUploadType2 {...args} />",...FileUploadWithExtensions.parameters?.docs?.source}}},DisabledFileUpload.parameters={...DisabledFileUpload.parameters,docs:{...DisabledFileUpload.parameters?.docs,source:{originalSource:"args => <FileUploadType2 {...args} />",...DisabledFileUpload.parameters?.docs?.source}}}}}]);