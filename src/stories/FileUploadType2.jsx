import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

const FileUploadType2 = ({
  maxSize = 5 * 1024 * 1024,
  maxCnt = 5,
  disabled = false,
  helpText = true,
  helpTextCustom = '지원 가능한 파일 안내문구 영역',
  showFileExtensions = true, // 확장자명 표시 여부
  accept = '*/*', // 모든 파일 형식 허용
}) => {
  const [files, setFiles] = useState([]);

  // 파일 선택 핸들러
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    // 파일 제한 조건 체크
    const newFiles = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (file.size <= maxSize && newFiles.length < maxCnt) {
        newFiles.push({
          name: file.name,
          extension: file.name.split('.').pop().toLowerCase(), // 확장자 추출
        });
      }
    }

    // 기존 파일과 새로 선택한 파일을 합쳐서 상태 업데이트
    setFiles((prevFiles) => [...prevFiles, ...newFiles].slice(0, maxCnt));
  };

  // 파일 삭제 핸들러
  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div style={{ width: '100%', textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>
      {/* 파일 선택 버튼 */}
      <Button
        variant="outlined"
        component="label"
        disabled={disabled}
        style={{ marginBottom: '10px', display: 'block' ,width:'100px',textAlign:"center",height:"36px", lineHeight:"25px" }}
      >
        파일 첨부
        <input
          type="file"
          accept={accept}
          onChange={handleFileChange}
          multiple
          hidden
        />
      </Button>

      {/* 안내 문구 */}
      {helpText && (
        <Typography
          variant="body2"
          style={{ color: 'red', marginBottom: '10px', fontSize: '14px' }}
        >
          {helpTextCustom}
        </Typography>
      )}

      {/* 파일 이름 및 삭제 버튼 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {files.map((file, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '5px 10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <Typography variant="body2" style={{ marginRight: '8px' }}>
              {file.name}
              {showFileExtensions && `, ${file.extension.toUpperCase()}`}
            </Typography>
            <button
              onClick={() => handleDelete(index)}
              style={{
                background: 'none',
                border: 'none',
                color: 'black',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploadType2;
