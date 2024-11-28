export const getPackageGroupList = () => {
  const list = localStorage.getItem("authList");

  if (list) {
    let authList = JSON.parse(list);
    authList = authList.filter((item) => item.packageGroupId !== "PKGGROUP00000" && item.packageEnable === "Y");
    return authList;
  } else {
    return [];
  }
};

export const getSettingMenuList = () => {
  const list = localStorage.getItem("authList");

  if (list) {
    let authList = JSON.parse(list);
    authList = authList.filter((item) => item.packageGroupId === "PKGGROUP00000" && item.packageEnable === "Y");
    return authList;
  } else {
    return [];
  }
};

export const getUserAuth = (uuid, packageGroupId, packageId) => {
  const list = localStorage.getItem("authList");
  const auth = { readAuthYn: "N", writeAuthYn: "N" };

  if (list) {
    let authList = JSON.parse(list);
    authList = authList.filter((item) => item.packageGroupId === packageGroupId && item.packageId === packageId);
    auth.readAuthYn = authList[0].readAuthYn;
    auth.writeAuthYn = authList[0].writeAuthYn;
  }

  localStorage.setItem("uuid", uuid);
  localStorage.setItem("packageGroupId", packageGroupId);
  localStorage.setItem("packageId", packageId);
  return auth;
};
