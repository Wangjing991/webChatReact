import {IAction} from "./shared";
import {getUserInfo, setUserInfo} from "../storage/userInfo";

export type UpdateUserId = (userId: number, userName: string) => IAction<any>;

export interface IGlobal {
  userId?: number;
  userName?: string;
}

const GLOBAL_UPDATE_USERID = "GLOBAL_UPDATE_USERID";

export const updateUserId = (userId: number, userName: string) => ({
  type: GLOBAL_UPDATE_USERID,
  payload: {userId, userName},
});

const userInfo: IGlobal = getUserInfo()
console.log(userInfo, 'userInfo')
const initialState: IGlobal = {
    userId: userInfo.userId,
    userName: userInfo.userName
  }
;

const globalReducer = (state = initialState, action: IAction) => {
  const {type, payload} = action;
  switch (type) {
    case GLOBAL_UPDATE_USERID: {
      setUserInfo(payload)
      console.log(payload, 'payload')
      return {...state, ...payload};
    }
    default: {
      return {...state};
    }
  }
}

export default globalReducer;
