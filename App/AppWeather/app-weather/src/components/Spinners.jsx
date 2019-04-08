import React from "react";
import "../styles/spinner.css";
import Error from "./Error";
const Spinners = ({status}) => (
    <div style={{textAlign: "center"}}>
        <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
        <div>
            {status === "failed" && <Error />}
        </div>
    </div>
)
export default Spinners