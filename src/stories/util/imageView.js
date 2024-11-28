import { getImageView } from "../../crud/file/file.crud";

export const imageView = async (fileId, fileSeq) => {
  const param = { fileId: fileId, fileSeq: fileSeq ? fileSeq : "1" };
  let image = "";

  await getImageView(param)
    .then((res) => {
      image = "data:image/png;base64, " + res.data;
    })
    .catch((err) => {
      if (err.response.data.message !== "TOKEN_EXPIRED" && err.response.data.message !== "ACCESS_DENIED") return "";
    });

  return image;
};
