import { INCREMENT, GET_POSTS } from "./actions";
import {tassign} from "tassign";

export interface IAppState {
  counter: number;
  post?: any;
  // messaging?: {
  //     newMessages : number;
  // }
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
  post: {}
  // messaging: {
  //     newMessages : 5
  // }
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case INCREMENT:
      console.log("this is reducer");
    //   return { counter: state.counter + 1};
    return tassign(state, {counter: state.counter + 1 });
    // return Object.assign({}, state, {counter: state.counter + 1});
    case GET_POSTS:
      console.log("this is post request", action.payload);
    //   return { counter: state.counter, post: action.payload };
    //   return tassign(state, {counter: state.counter, post: action.payload});
  }
  return state;
}
