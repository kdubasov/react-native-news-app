import React from 'react';
import {AlertErrorView} from "./AlertErrorStyle";
import {H3, P} from "../../styles";

const AlertError = ({error}) => {
    return (
        <AlertErrorView>
            <H3>ERROR!</H3>
            <P>{error}</P>
        </AlertErrorView>
    );
};

export default AlertError;
