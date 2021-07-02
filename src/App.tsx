import { BrowserRouter as Router } from "react-router-dom";

import { AppProvider } from "./context/AppProvider";

import Toasts from "./components/Toasts";
import Navbar from "./components/Navbar";
import BigSplash from "./components/BigSplash";

function App() {
    return (
        <AppProvider>
            <div className="bg-gray-900">
                <Router>
                    <Navbar />
                    <BigSplash />
                    <main className="container mx-auto"></main>
                </Router>
            </div>
            <Toasts />
        </AppProvider>
    );
}

<div className="px-9 py-3 mx-auto grid grid-cols-3 items-center text-white w-11/12  max-w-7xl"></div>;

export default App;

// context setup inspired by
// https://codesandbox.io/s/context-reducer-ts-9ctis?file=/src/reducers.ts
