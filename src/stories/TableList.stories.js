import { TableList } from './TableList';

// Storybook 기본 설정
export default {
  title: 'Example/TableList', // Story의 이름
  component: TableList,      // 연결된 컴포넌트
};

// 기본 스토리
export const Default = () => (
  <TableList 
    label="기본 테이블"
    backgroundColor="#ffffff"
    onClick={() => console.log('테이블 항목이 클릭되었습니다!')} 
  />
);

