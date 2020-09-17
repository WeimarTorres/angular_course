import { createReducer, Action, on } from "@ngrx/store";
import { Report } from "./admin.actions";

export interface AdminState {
    totalEnable: number,
    totalNoEnable: number
}

export const initialState: AdminState = {
    totalEnable: 0,
    totalNoEnable: 0
};

const featureReducer = createReducer(
    initialState,
    on(Report, (state, {person}) => ({...state, totalEnable: person.enable ? state.totalEnable++ : state.totalEnable, totalNoEnable: person.enable ? state.totalNoEnable : state.totalNoEnable++}))
);

export function reducer(state: AdminState, action: Action): any {
    return featureReducer(state, action);
}