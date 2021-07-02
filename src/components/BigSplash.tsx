import { useContext, useState } from "react";

import { AppContext } from "../context/AppProvider";

import oys from "./bballnight.jpeg";

const BigSplash = () => {
    const [logText, setLogText] = useState("");
    const { state } = useContext(AppContext);

    const formSumbit = (e: any) => {
        e.preventDefault();
        state.secondTestFunction(logText);
    };

    return (
        <div
            className=" bg-local w-full h-screen"
            style={{
                backgroundImage: `url(${oys}
                )`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="grid grid-cols-3 grid-rows-3 container mx-auto h-full ">
                <h1 className="uppercase text-white  row-start-2 self-center justify-end text-right text-9xl text-shadow font-black">
                    We play
                    <p>
                        <span className="italic">ball</span>
                    </p>
                </h1>
                <div className=" mt-16 row-start-3 col-start-3">
                    <form onSubmit={formSumbit} className="flex flex-col gap-4">
                        <label htmlFor="logger" className="text-white">
                            Log it to the console
                        </label>
                        <input
                            type="text"
                            id="logger"
                            value={logText}
                            onChange={(e) => setLogText(e.target.value)}
                            className="p-2"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="w-max px-4 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BigSplash;
