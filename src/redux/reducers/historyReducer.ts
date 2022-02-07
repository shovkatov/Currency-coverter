import { historyActions, historyActionTypes, historyState } from "../types/historyTypes";

const initState: historyState = {
    histories:[]
};

export const historyReducers = (state = initState, action: historyActions): historyState => {
   switch (action.type) {
      case historyActionTypes.GET_HISTORIES:
         return { histories:[action.payload , ...state.histories]};
      default:
         return state;
   }
};
