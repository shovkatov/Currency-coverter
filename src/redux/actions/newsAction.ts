import axios from "axios";
import { Dispatch } from "react";
import { newsActions, newsActionTypes } from "../types/newsTypes";
import { BASE_URL } from "./optionAction";


export const getCurrencies = (option: string) => (dispatch: Dispatch<newsActions>) => {
    try {
       axios
          .get(`${BASE_URL}/latest/${option}`)
          .then((res) => dispatch({ type: newsActionTypes.GET_CURRENCIES, payload: res.data.conversion_rates }));
    } catch (e) {
       console.log(e);
    }
 };