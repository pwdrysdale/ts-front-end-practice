import { useContext } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { AppContext } from "../context/AppProvider";
import { ToastTypes } from "../context/toastReducer";

const linkClasses =
    "px-4 py-2 rounded-sm hover:bg-red-400 hover:text-white cursor-pointer";

const Navbar = () => {
    const { dispatch, state } = useContext(AppContext);

    type IncomingToast = {
        text: String;
        type: String;
    };

    const setToast = ({ text, type }: IncomingToast): void => {
        const id = uuid();
        dispatch({
            type: ToastTypes.AddToast,
            payload: { text, type, id },
        });

        setTimeout(() => {
            dispatch({ type: ToastTypes.DeleteToast, payload: { id } });
        }, 4000);
    };

    const welcome = (): void => {
        setToast({ text: "Welcome to the site!", type: "success" });
    };

    const navItems = [
        { text: "Login", to: "/login", condition: "public" },
        { text: "Cart", to: "/cart" },
        {
            text: "Welcome",
            function: welcome,
        },
        {
            text: "Test",
            function: state.testFunction,
        },
    ];

    return (
        <nav className="fixed w-full top-0 shadow-md  bg-white z-50 text-gray-900">
            <div className="px-9 py-2 mx-auto grid grid-cols-3 items-center  container">
                <div className="font-bold uppercase tracking-widest">
                    Bball crew
                </div>
                <div className="mx-auto">Your boy</div>
                <div className="hidden lg:block ml-auto">
                    <ul className="flex gap-2">
                        {navItems.map((x, ind) =>
                            x.to ? (
                                <Link to={x.to} key={ind}>
                                    <li className={linkClasses}>{x.text}</li>
                                </Link>
                            ) : (
                                <li
                                    onClick={x.function}
                                    className={linkClasses}
                                    key={ind}
                                >
                                    {x.text}
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <div className="ml-auto lg:hidden">Nav items small screen</div>
            </div>
        </nav>
    );
};

export default Navbar;
