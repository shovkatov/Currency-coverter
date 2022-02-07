export interface historyState {
    histories: Array<any>,
 }
 
 export interface historyActions {
    type: historyActionTypes.GET_HISTORIES
    payload: Array<any>;
 }
 
 export enum historyActionTypes {
    GET_HISTORIES = 'GET_HISTORIES',
 }
 