import { ActionMap } from "./actionMap";

import { Toast } from "../interfaces";

import { ProductActions } from "./productReducer";

export enum ToastTypes {
    AddToast = "ADD_TOAST",
    DeleteToast = "DELETE_TOAST",
}

export type ToastPayload = {
    [ToastTypes.AddToast]: {
        id: String;
        type: String;
        text: String;
    };
    [ToastTypes.DeleteToast]: {
        id: String;
    };
};

export type ToastActions =
    ActionMap<ToastPayload>[keyof ActionMap<ToastPayload>];

export const toastReducer = (
    state: Toast[],
    action: ToastActions | ProductActions
) => {
    switch (action.type) {
        case ToastTypes.AddToast:
            return [...state, action.payload];
        case ToastTypes.DeleteToast:
            return [...state.filter((x) => x.id !== action.payload.id)];
        default:
            return state;
    }
};
