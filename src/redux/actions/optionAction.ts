import axios from 'axios';
import { Dispatch } from 'react';
import { OptionActions, optionActionTypes } from '../types/optionsTypes';

export const BASE_URL = 'https://v6.exchangerate-api.com/v6/70f6c3666d6bb42ebf64ef47';

export const getResult = (fromCurrency:string , toCurrency: string) => (dispatch: Dispatch<OptionActions>) => {
   try {
      axios
         .get(`${BASE_URL}/pair/${fromCurrency}/${toCurrency}`)
         .then((res) => dispatch({ type: optionActionTypes.GET_OPTIONS, payload: res.data.conversion_rate }));
   } catch (e) {
      console.log(e);
   }
};
