import { ActionMap } from "./actionMap";
import { Product } from "../interfaces";

import { ToastActions } from "./toastReducer";

export enum ProductTypes {
    AddProduct = "ADD_PRODUCT",
    DeleteProduct = "DELETE_PRODUCT",
}

export type ProductPayload = {
    [ProductTypes.AddProduct]: {
        id: String;
        name: String;
        description: String;
        image: String;
        inStock: Number;
    };
    [ProductTypes.DeleteProduct]: {
        id: String;
    };
};

export type ProductActions =
    ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
    state: Product[],
    action: ToastActions | ProductActions
) => {
    switch (action.type) {
        case ProductTypes.AddProduct:
            return [...state, action.payload];
        case ProductTypes.DeleteProduct:
            return [...state.filter((x) => x.id !== action.payload.id)];
        default:
            return state;
    }
};
