import { createContext, useReducer, Dispatch } from "react";

import mainReducer from "./appReducer";
import { ToastActions } from "./toastReducer";
import { ProductActions } from "./productReducer";

import { AppContext as AppContextType } from "../interfaces";

const initialState: AppContextType = {
    toasts: [
        {
            type: "",
            text: "",
            id: "",
        },
    ],
    products: [
        {
            id: "asfsdafsdef",
            name: "Test Product 1",
            description: "A product just for testing stuff out",
            image: "/bballnight.jpeg",
            inStock: 5,
        },
    ],
    testFunction: () => console.log("This is the test function"),
    secondTestFunction: (that: String): void => console.log(that),
};

const AppContext = createContext<{
    state: AppContextType;
    dispatch: Dispatch<ToastActions | ProductActions>;
}>({ state: initialState, dispatch: () => null });

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
