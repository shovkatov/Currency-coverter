import { combineReducers } from 'redux';
import { historyReducers } from './historyReducer';
import { newsReducers } from './newsReducer';
import { optionReducers } from './optionsReducer';

export const rootReducer = combineReducers({
   result: optionReducers,
   currencies:newsReducers,
   history:historyReducers
});
export type RootState = ReturnType<typeof rootReducer>