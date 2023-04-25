import Cookies from 'universal-cookie';

const cookies = new Cookies()
const USER_LOGIN_COOKIE = 'userLogedIn'

export function setUserLogin() {
  cookies.set(USER_LOGIN_COOKIE, true)
}

export function setUserLogout() {
  cookies.set(USER_LOGIN_COOKIE, false)
}

export function getUserLoginCookie() {
  return cookies.get(USER_LOGIN_COOKIE)
}

export function removeUserLoginCookie() {
  cookies.remove(USER_LOGIN_COOKIE)
}

