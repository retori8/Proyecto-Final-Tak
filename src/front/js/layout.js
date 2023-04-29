import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import { UserPerfil } from "./pages/userPerfil";
import { RegisterPage } from "./pages/registerPage";
import { RecoveryPass } from "./pages/recoveryPass";
import { Tak } from "./pages/tak";
import { Respira } from "./pages/respira";
import { LoginUser } from "./pages/loginUser";
import { Donate } from "./pages/donate";
import { Error401 } from "./pages/401";
import { Error403 } from "./pages/403";
import { Error503 } from "./pages/503";
import { Navbar } from "./component/navbar";
import { Login } from "./component/Login";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Navbar />
                <Routes>
                    <Route element={<Login />} path="/login" />
                    <Route element={<Home />} path="/" />
                    <Route element={<h1>Not found!</h1>} />
                    <Route element={<UserPerfil />} path="/user/:id" />
                    <Route element={<RegisterPage />} path="/register" />
                    <Route element={<RecoveryPass />} path="/recovery" />
                    <Route element={<Tak />} path="/tak" />
                    {/* <Route element={<LoginUser />} path="/login" /> */}
                    <Route element={<Respira />} path="/respira" />
                    <Route element={<Donate />} path="donate" />
                    <Route element={<Error401 />} path="error401" />
                    <Route element={<Error403 />} path="error403" />
                    <Route element={<Error503 />} path="error503" />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div >
    );
};

export default injectContext(Layout);
