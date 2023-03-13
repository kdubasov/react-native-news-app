import React from 'react';
import {AlertErrorView} from "./AlertErrorStyle";
import {H3, P} from "../../styles";

const AlertError = ({error}) => {
    return (
        <AlertErrorView>
            <H3 style={{color: "darkred"}}>ERROR!</H3>
            <P style={{color: "darkred"}}>{error}</P>
        </AlertErrorView>
    );
};

export default AlertError;
