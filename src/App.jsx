import React from "react";
import { useReducer } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import { RootContext } from "./utilities/context";
import { reducer } from "./utilities/reducer";

function App() {
    const [context, dispatchContext] = useReducer(reducer, { users: [0, 1, 3] });
    return (
        <RootContext.Provider value={[context, dispatchContext]}>
            <HashRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="test" element={<Test />} />
                    </Route>
                </Routes>
            </HashRouter>
        </RootContext.Provider>
    );
}

export default App;
