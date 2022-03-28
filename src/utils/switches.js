import React from "react";
import { Route, Routes } from "react-router-dom";
import Collaborated from "../components/collaborated";
import Expertise from "../components/expertise";
import Welcome from "../components/welcome";



export default function Switches(){
    return(
        <Routes>
            <Route path={"*"} element={<Welcome />} />
            <Route path={"/exp"} element={<Expertise />} />
            <Route path={"/col"} element={<Collaborated />} />
        </Routes>
    )
}