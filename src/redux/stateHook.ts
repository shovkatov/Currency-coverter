import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./reducers/rootReducer";

export const stateHook: TypedUseSelectorHook<RootState> = useSelector