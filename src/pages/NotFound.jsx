import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="not-found-page">
            <h1>Page not found</h1>
            <Link to='/'>Back to homepage</Link>
        </div>
    )
}