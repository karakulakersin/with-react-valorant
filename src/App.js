import React from "react";
import Login from "./views/Login"
import Main from "./views/Main"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default function App() {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/login">login</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/login"  element={<Login/>}/>
                    <Route path="/"  element={<Main/>}/>
                </Routes>
            </div>
        </Router>
    );
}
