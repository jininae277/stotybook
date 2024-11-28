import React from 'react';
import FileUploadType2 from './FileUploadType2'; // 컴포넌트 경로에 맞게 수정

// Storybook 설정
export default {
  title: 'Example/FileUploadType2', // 스토리북 내 컴포넌트 그룹
  component: FileUploadType2, // 사용할 컴포넌트
  parameters: {
   // layout: 'centered', // 중앙 정렬
  },
  tags: ['autodocs'], // 자동 문서화
};

const Template = (args) => <FileUploadType2 {...args} />;

// 파일 첨부 버튼 + 확장자명 표시 예시
export const FileUploadWithExtensions = Template.bind({});
FileUploadWithExtensions.args = {
  maxSize: 10 * 1024 * 1024, // 파일 최대 사이즈 10MB
  maxCnt: 5, // 업로드 가능한 최대 파일 개수
  accept: "*/*", // 모든 파일 형식 허용
  showFileExtensions: true, // 파일 확장자명 표시 옵션 활성화
  helpText: true, // 도움말 텍스트 활성화
  helpTextCustom: '지원되는 파일 형식: 모든 파일 형식, 최대 10MB', // 도움말 내용 커스텀
};


// 비활성화된 상태 예시
export const DisabledFileUpload = Template.bind({});
DisabledFileUpload.args = {
  maxSize: 10 * 1024 * 1024, // 파일 최대 사이즈 10MB
  maxCnt: 5, // 업로드 가능한 최대 파일 개수
  accept: "*/*", // 모든 파일 형식 허용
  showFileExtensions: true, // 파일 확장자명 표시 옵션 활성화
  helpText: true, // 도움말 텍스트 활성화
  helpTextCustom: '지원되는 파일 형식: 모든 파일 형식, 최대 10MB', // 도움말 내용 커스텀
  disabled: true, // disabled 상태로 설정
};