import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Pagination } from '@mui/material';
import SelectCustom from './SelectCustom';

export const TableList = ({ variant, backgroundColor, size, label, icon, isFullWidth = false, ...props }) => {
  const [page, setPage] = useState(1);  // 현재 페이지
  const [pageSize, setPageSize] = useState(10);  // 한 페이지에 표시할 데이터 수
  const [selectedRows, setSelectedRows] = useState([]);  

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150, editable: true },
    { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
    { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];

  const [rows, setRows] = useState([
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: 'cc', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 12, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 13, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 14, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 15, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 16, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 17, lastName: 'Melisandre', firstName: 'cc', age: 150 },
    { id: 18, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 19, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 21, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 22, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 23, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 24, lastName: 'Lannister', firstName: 'Jaime', age: 32 },
    { id: 25, lastName: 'Stark', firstName: 'Arya', age: 2 },
    { id: 26, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 27, lastName: 'Melisandre', firstName: 'cc', age: 250 },
    { id: 28, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 29, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 30, lastName: 'Roxie', firstName: 'Harvey', age: 65 },   
  ]);

  const totalRows = rows.length;

  const paginatedRows = rows.slice((page - 1) * pageSize, page * pageSize);

  const handleRowsPerPageChange = (selectedValue) => {
    const newPageSize = Number(selectedValue);
    setPageSize(newPageSize); 
  };

  // 페이지 변경 처리
  const handlePageChange = (event, value) => {
    setPage(value);  
  };

  const handleDelete = () => {
    const remainingRows = rows.filter((row) => !selectedRows.includes(row.id));
    setRows(remainingRows);
    
    console.log('삭제된 행:', selectedRows);
    console.log('남은 행:', remainingRows);
  };
  

  useEffect(() => {
    setPage(1);  
  }, [pageSize]);




  return (
    <TableListWrap isFullWidth={isFullWidth}>
      <ListTop>
        <b>총 {totalRows}개</b>
        <div>
          <Button icon="delete" label="삭제"  onClick={handleDelete} variant="secondary"/>
          <Button label="버튼 2" onClick={() => {}} variant="default" />
          <Button icon="save" label="등록" onClick={() => {}} variant="primary" />
        </div>
      </ListTop>
      <ListResult>
        <Box sx={{ width: '100%',  height:'500px' }}>
          <DataGrid
            rows={paginatedRows}
            columns={columns}
            checkboxSelection
            onSelectionModelChange={(newSelection) => setSelectedRows(newSelection.selectionModel)}
            disableRowSelectionOnClick
            disableColumnResize//컬럼 너비 조정 비활성화
            pagination={true}
            pageSize={pageSize}
            components={{
              Footer: () => null,
            }}
            localeText={{
              noRowsLabel: '조회된 내용이 없습니다.',
            }}

            sx={{
              '&.MuiDataGrid-overlay':{
                fontSize:'16px',
              },
              
              '& .MuiDataGrid-columnHeaders': {
                outline: 'none', // columnHeader의 outline 제거
              },
              '& .MuiDataGrid-columnHeader:focus': {
                outline: 'none', // 포커스 시 나타나는 outline 제거
              },
              '& .MuiDataGrid-cell':{
                cursor:'pointer',
              },
              '& .MuiDataGrid-cell:focus':{
                outline:'none'
              },

              '& .MuiDataGrid-footerContainer': {
                display: 'none',
                height: 'unset',
                minHeight: 'unset',
              },
            }}
          />
          {/* {totalRows === 0 && (
            <NoDataMessage>
              조회된 내용이 없습니다.
            </NoDataMessage>
          )} */}
          
        </Box>
        {totalRows > 0 && (
          <TableBottom>
            <SelectCustom
            displayEmpty
              placeholder="선택하세요"
              value={pageSize}
              selected={pageSize}
              //selected={[String(pageSize)]}
              onChange={handleRowsPerPageChange}
              multiple={false}
              options={[
                { value: 10, label: '10개씩 보기' },
                { value: 25, label: '25개씩 보기' },
                { value: 50, label: '50개씩 보기' },
                { value: 100, label: '100개씩 보기' },
              ]} 
            
            />
            <Pagination
              count={Math.ceil(totalRows / pageSize)}  
              page={page}     
            // rowsPerPage={pageSize}
              onChange={handlePageChange}
              color="primary"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'calc(100% - 150px)',
                marginRight: '150px',
              }}
            />
          </TableBottom>
        )}
      </ListResult>
    </TableListWrap>
  );
};

const TableListWrap = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
`;

const ListTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const ListResult = styled.div`
  padding-top: 20px;
`;

const TableBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const NoDataMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 16px;
  color: #888;
  font-weight: bold;
  border-bottom: '1px solid #ddd'; 
`;

export default TableList;
