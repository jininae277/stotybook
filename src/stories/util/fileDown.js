export const extractDownloadFilename = (response) => {
  const disposition = response.headers["content-disposition"];
  const fileName = decodeURI(disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1].replace(/['"]/g, ""));
  return fileName;
};

export function fileDownloadByResponse(response, fileName) {
  const blob = new Blob([response]);
  const fileObjectUrl = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = fileObjectUrl;
  link.style.display = "none";

  link.download = fileName || extractDownloadFilename(response);
  document.body.appendChild(link);
  link.click();
  link.remove();

  // 다운로드가 끝난 리소스(객체 URL)를 해제합니다.
  window.URL.revokeObjectURL(fileObjectUrl);
}

// blob을 base64로 return해주는 함수
export const blobToBase64 = async (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to convert blob to base64."));
      }
    };

    reader.onerror = () => {
      reject(new Error("Failed to read blob."));
    };

    reader.readAsDataURL(blob);
  });
};
