export interface OptionState {
   result: number,
   loading:boolean
}

export interface OptionActions {
   type: optionActionTypes.GET_OPTIONS;
   payload: number;
}

export enum optionActionTypes {
   GET_OPTIONS = 'GET_OPTIONS',
}
