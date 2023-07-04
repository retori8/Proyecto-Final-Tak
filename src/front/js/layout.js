import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import injectContext, { Context } from "./store/appContext";

import { Footer } from "./component/footer";
import { Tak } from "./pages/tak";
import { Respira } from "./pages/respira";
import { Navbar } from "./component/navbar";
import { HomeLogeado } from "./pages/homelogeado";
import { Challenges } from "./pages/desafios";
import { RandomChallenge } from "./pages/randomchallenge";
import { Discover } from "./pages/descubre";
import { Register } from "./pages/register";
import { Day1 } from "./pages/dia1";
import { Day21 } from "./pages/dia21";
import { Loginow } from "./pages/login";
import PanelAdministrativo from "./pages/panelAdministrativo";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;
    const { store: { currentUser } } = useContext(Context)
    return (
        <div>
            <BrowserRouter basename={basename}>
                <Navbar />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Register />} path="/registrarme" />
                    <Route element={<Loginow />} path="/acceso" />
                    <Route element={<HomeLogeado />} path="/home" />
                    <Route element={<Tak />} path="/tak" />
                    <Route element={<Respira />} path="/respira" />
                    <Route element={<Challenges />} path="/desafios" />
                    <Route element={<RandomChallenge />} path="/desafios/random" />
                    <Route element={<Day1 />} path="/desafios/21dias/:current_day" />
                    <Route element={<Day21 />} path="/desafios/21dias/21" />
                    <Route element={<Discover />} path="/descubre" />
                    <Route element={<PanelAdministrativo />} path="/panel_administrativo" />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div >
    );
};

export default injectContext(Layout);
