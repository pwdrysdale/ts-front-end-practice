import { useContext } from "react";

import { AppContext } from "../context/AppProvider";

const Toasts = () => {
    const { state } = useContext(AppContext);

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items">
            {state.toasts
                .filter((x) => x.text.length > 0)
                .map((x, ind) => (
                    <div className="bg-yellow-300 m-2 px-4 py-2" key={ind}>
                        {x.text}
                    </div>
                ))}
        </div>
    );
};

export default Toasts;
