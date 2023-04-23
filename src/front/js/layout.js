import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UserPerfil } from "./pages/userPerfil";
import { RegisterPage } from "./pages/registerPage";
import { RecoveryPass } from "./pages/recoveryPass";
import { Tak } from "./pages/tak";
import { Login } from "./component/Login";
import { Respira } from "./pages/respira";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<UserPerfil />} path="/user/:id" />
                        <Route element={<RegisterPage />} path="/register" />
                        <Route element={<RecoveryPass />} path="/recovery" />
                        <Route element={<Tak />} path="/tak" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Respira />} path="/respira" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
