import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/modalSlice";
import { dp } from "../../assets";
import "./online.css";

const Online = () => {
    const {
        users: { users },
    } = useSelector(state => state);

    const dispatch = useDispatch();

    
    return (
        <section className="online">
            <h2>Something will go here </h2>
         
        </section>
    );
};

export default Online;
