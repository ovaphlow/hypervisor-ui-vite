import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { RootContext } from "../utilities/context";

const Test = () => {
    const [{ users, counter }] = useContext(RootContext);

    useEffect(() => {
        console.log(users);
        console.log(counter);
    }, []);

    return (
        <>
            <h1>TEST</h1>
            <Link to={"/"}>HOME</Link>
        </>
    );
};

export default Test;
