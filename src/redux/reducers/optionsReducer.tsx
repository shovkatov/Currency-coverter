import { OptionActions, optionActionTypes, OptionState } from "../types/optionsTypes";

const initState: OptionState = {
   result: 0,
   loading:false
};

export const optionReducers = (state = initState, action: OptionActions): OptionState => {
   switch (action.type) {
      case optionActionTypes.GET_OPTIONS:
         return { result: action.payload , loading:true};
      default:
         return state;
   }
};
