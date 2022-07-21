import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "../App.css";
import { RootContext } from "../utilities/context";

const Home = () => {
    const [context, dispatchContext] = useContext(RootContext);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((count) => count + 1);
        dispatchContext({ type: "set", key: "counter", value: count + 1 });
    };

    useEffect(() => {
        console.log(count);
        console.log(context);
    }, [count]);

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={handleClick}>count is {count}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <br />
            <a href="test.html">TEST</a>
            <br />
            <Link to={"/test"}>TEST</Link>
        </div>
    );
};

export default Home;
