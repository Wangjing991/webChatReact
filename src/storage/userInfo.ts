let cacheToken: object = {};

const LOCAL_STORAGE_USERINFO = "LOCAL_STORAGE_USERINFO";

export const getUserInfo = (): object => {
  if (Object.keys(cacheToken).length) {
    return cacheToken;
  }
  const tokenString = localStorage.getItem(LOCAL_STORAGE_USERINFO);
  if (tokenString) {
    try {
      const json = JSON.parse(tokenString);
      cacheToken = json;
      return cacheToken;
    } catch (e) {
    }
  }
  return {};
}

export const removeUserInfo = () => {
  cacheToken = {};
  localStorage.removeItem(LOCAL_STORAGE_USERINFO);
}

export const setUserInfo = (json: object) => {
  cacheToken = json;
  localStorage.setItem(LOCAL_STORAGE_USERINFO, JSON.stringify(json));
}
