import Cookies from 'js-cookie';
/**
 * 设置用户信息
 * @param {*} info 用户的信息
 */
export function setCookie(info) {
  const infoArr = Object.entries(info);
  console.log(infoArr);
  for (let i = 0; i < infoArr.length; i += 1) {
    console.log(i);
    Cookies.set(infoArr[i][0], infoArr[i][1]);
  }
}
export function getCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
    email: Cookies.get('email'),
  };
}

/**
 * 移除cookie
 */
export function removeCookie() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  Cookies.remove('email');
  return true;
}
