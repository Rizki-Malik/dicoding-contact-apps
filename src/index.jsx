import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";

import './styles/style.css';

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ContactApp/>
    </BrowserRouter>
)