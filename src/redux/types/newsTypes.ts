export interface newsState {
    allCurrency: Array<any>,
 }
 
 export interface newsActions {
    type: newsActionTypes.GET_CURRENCIES
    payload: Array<any>;
 }
 
 export enum newsActionTypes {
    GET_CURRENCIES = 'GET_CURRENCIES',
 }
 