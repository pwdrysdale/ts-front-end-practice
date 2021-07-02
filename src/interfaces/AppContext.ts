import { Toast } from "./Toast";
import { Product } from "./Product";

export interface AppContext {
    toasts: Toast[];
    products: Product[];
    testFunction: () => void;
    secondTestFunction: (that: String) => void;
}
