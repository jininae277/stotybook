import React, { useState, useCallback } from "react";
import { Typography, Button } from "@mui/material";
import { useDropzone } from "react-dropzone";

const FileUploadWithPreview = ({
  maxSize = 5 * 1024 * 1024, // 최대 파일 크기 (5MB)
  maxCnt = 5,
  disabled = false, 
  helpText = true, 
  helpTextCustom, 
}) => {
  const [files, setFiles] = useState([]); 

  // 파일 드롭 핸들러
  const onDrop = useCallback(
    (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file), // 미리보기 URL 생성
        deletedYn: "N", // 삭제 여부
      }));

      // 기존 파일과 새로 추가된 파일을 결합, 최대 업로드 개수 제한 적용
      const updatedFiles = [...files, ...newFiles].slice(0, maxCnt);
      setFiles(updatedFiles);
    },
    [files, maxCnt]
  );

  // 드래그 앤 드롭 설정
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    accept: "image/*", 
    maxSize, 
    disabled, 
  });

  // 파일 미리보기 렌더링
  const thumbs = files
    .filter((file) => file.deletedYn === "N") 
    .map((file, index) => (
      <div
        key={index}
        style={{
          display: "inline-block",
          margin: "10px",
          position: "relative",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <img
          src={file.preview}
          alt={`미리보기 ${index}`}
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        {/* 삭제 버튼 */}
        <span
          onClick={() => handleDelete(index)}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            cursor: "pointer",
            width: "20px",
            height: "20px",
            textAlign: "center",
            lineHeight: "20px",
          }}
        >
          ×
        </span>
      </div>
    ));

  // 파일 삭제 핸들러
  const handleDelete = (index) => {
    const updatedFiles = [...files];
    updatedFiles[index].deletedYn = "Y";
    setFiles(updatedFiles);
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      {/* 드래그 앤 드롭 영역 */}
      <div
        {...getRootProps({
          className: "dropzone",
        })}
        style={{
          border: "2px dashed #ccc",
          padding: "20px",
          marginBottom: "20px",
          cursor: disabled ? "not-allowed" : "pointer",
          backgroundColor: disabled ? "#f9f9f9" : "#fff",
        }}
      >
        {/* 파일 미리보기 */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {thumbs}
        </div>
        <input {...getInputProps()} />
        {files.length === 0 ? (
          <Typography fontSize={14} color={disabled ? "gray" : "#000"}>
            이미지를 드래그하거나 클릭하여 업로드하세요 (최대 {maxCnt}개).
          </Typography>
        ) : (
          <Typography fontSize={14} color={disabled ? "gray" : "#000"}>
            추가 이미지를 업로드하려면 클릭 또는 드래그하세요.
          </Typography>
        )}
      </div>

      {/* 도움말 영역 */}
      {helpText && (
        <div style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
          {helpTextCustom || "지원되는 파일 형식: jpg, png, gif, 최대 5MB"}
        </div>
      )}

      {/* 업로드 버튼 */}
      <Button
        variant="contained"
        color="primary"
        disabled={files.filter((file) => file.deletedYn === "N").length === 0 || disabled}
        style={{ marginTop: "20px" }}
        onClick={() => alert("업로드 완료!")}
      >
        업로드
      </Button>
    </div>
  );
};

export default FileUploadWithPreview;
