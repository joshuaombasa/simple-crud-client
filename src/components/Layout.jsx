import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div className="">
            <div className="header">
                <Link className="logo">Todos</Link>
                <nav>
                    <NavLink to="todos">Your todos</NavLink>
                    <NavLink to="addTodo">Add new todo</NavLink>
                    <NavLink to=""></NavLink>
                </nav>
            </div>
            <div className="outlet-container">
                <Outlet />
            </div>
        </div>
    )
}