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
import { HomeLogeado } from "./pages/homelogeado";
import { Challenges } from "./pages/challenges";
import { RandomChallenge } from "./pages/randomchallenge";
import { Challenge21Days } from "./pages/21dayschallenge";
import { DayOf21Days } from "./pages/day21days";
import { Fail21Days } from "./pages/fail21days";
import { Discover } from "./pages/discover";

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
                        <Route element={<HomeLogeado />} path="/home" />
                        <Route element={<Challenges />} path="/challenges" />
                        <Route element={<RandomChallenge />} path="/challenges/random" />
                        <Route element={<Challenge21Days />} path="/challenges/21days" />
                        <Route element={<DayOf21Days />} path="/challenges/21days/:id" />
                        <Route element={<Fail21Days />} path="/challenges/fail21days" />
                        <Route element={<Discover />} path="/discover" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
