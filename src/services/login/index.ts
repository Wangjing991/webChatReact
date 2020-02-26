import transport, {getAxios} from "../transport";

/**
 * 获取所有测试
 */
export const userLogin = (data: any) => {
  return getAxios('user/login', data);
}

export const userRegister = (data: any) => {
  return getAxios('user/register', data);
}

