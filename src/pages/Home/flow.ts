import {Dispatch} from "redux";
import {IAction} from "../../store/shared";
import {string} from "prop-types";

export type UpdateMsgList = (count: string) => void;
export type AsyncUpdateCount = (count: number) => void;

export interface IHomePage {
  msgList: string[];
}

const HOME_UPDATE_COUNT = "HOME_UPDATE_COUNT";

/**
 * 同步更新计数器
 * @param count number
 */
export const updateMsgList = (str: any) => {
  return {
    type: HOME_UPDATE_COUNT,
    payload: str,
  }
}


/**
 * 异步更新计数器
 * @param count number
 * @param dispatch Dispatch<IAction>
 */
export const asyncUpdateCount = (count: number) => (dispatch: Dispatch<IAction>) => {
  setTimeout(() => {
    const newCount = count + 1;
    dispatch({
      type: HOME_UPDATE_COUNT,
      payload: newCount
    })
  }, 1000);
}

const initialState: IHomePage = {
  msgList: [],
}

const homeReducer = (state = initialState, action: IAction) => {
  const {type, payload} = action;
  switch (type) {
    case HOME_UPDATE_COUNT: {
      const {msgList = []} = state
      console.log(msgList.concat(payload), 'msgList.concat(payload)', payload)
      return {
        ...state, msgList: msgList.concat(payload)
      };
    }
    default: {
      return {...state};
    }
  }
}

export default homeReducer;
