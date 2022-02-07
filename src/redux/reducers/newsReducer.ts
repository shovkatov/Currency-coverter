import { newsActions, newsActionTypes, newsState } from "../types/newsTypes";

const initState: newsState = {
    allCurrency:[]
};

export const newsReducers = (state = initState, action: newsActions): newsState => {
   switch (action.type) {
      case newsActionTypes.GET_CURRENCIES:
         return { allCurrency:action.payload};
      default:
         return state;
   }
};
