import { AppContext } from "../interfaces";

import { ToastActions, toastReducer } from "./toastReducer";
import { ProductActions, productReducer } from "./productReducer";

const mainReducer = (
    { toasts, products, testFunction, secondTestFunction }: AppContext,
    action: ToastActions | ProductActions
) => ({
    toasts: toastReducer(toasts, action),
    products: productReducer(products, action),
    testFunction,
    secondTestFunction,
});

export default mainReducer;
