import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";

import App from "./App";
import "./index.css";

ReactDOM.render(
    <SpeechProvider appId="0aab39e6-ba07-4975-ac3f-52154b00b8b6" language="en-US">
        <Provider>
            <App></App>
        </Provider>
    </SpeechProvider>,
document.getElementById('root'));