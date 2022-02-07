import { Dispatch } from "react";
import { historyActions, historyActionTypes } from "../types/historyTypes";


export const sendToStore = (data: any) => (dispatch: Dispatch<historyActions>) => {
    dispatch({ type: historyActionTypes.GET_HISTORIES, payload: data })
 };