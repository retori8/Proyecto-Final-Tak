import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";
import { Link, useNavigate } from "react-router-dom";
import { Home } from "./pages/home";
import injectContext, { Context } from "./store/appContext";

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
import { HomeLogeado } from "./pages/homelogeado";
import { Challenges } from "./pages/challenges";
import { RandomChallenge } from "./pages/randomchallenge";
import { Start21days } from "./pages/21dayschallenge";
import { Challenge21Days } from "./pages/21dayschallenge";
import { DayOf21Days } from "./pages/day21days";
import { Day2 } from "./pages/day2";
import { Fail21Days } from "./pages/fail21days";
import { Discover } from "./pages/discover";
import { Storage } from "./pages/storage";
import { ProteccionDeRutas } from "../../utils/proteccionderutas";
import { Register } from "./pages/register";
import { Day1 } from "./pages/day1";
import { Day3 } from "./pages/day3";
import { Day4 } from "./pages/day4";
import { Day5 } from "./pages/day5";
import { Day10 } from "./pages/day10";
import { Day12 } from "./pages/day12";
import { Day13 } from "./pages/day13";
import { Day14 } from "./pages/day14";
import { Day15 } from "./pages/day15";
import { Day16 } from "./pages/day16";
import { Day17 } from "./pages/day17";
import { Day18 } from "./pages/day18";
import { Day19 } from "./pages/day19";
import { Day20 } from "./pages/day20";
import { Day21 } from "./pages/day21";
import { Day9 } from "./pages/day9";
import { Day8 } from "./pages/day8";
import { Day7 } from "./pages/day7";
import { Day6 } from "./pages/day6";
import { Loginow } from "./pages/login";
import { Day11 } from "./pages/day11";
import PanelAdministrativo from "./pages/panelAdministrativo";
import { NavbarZaimon } from "./component/home/navbarZaimon";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;
    const { store: { currentUser } } = useContext(Context)
    // const { store, actions } = useContext(Context);
    // const navigate = useNavigate();
    return (
        <div>
            <BrowserRouter basename={basename}>
                {/*  <NavbarZaimon /> */}
                <Navbar />
                <Routes>
                    <Route element={<Login />} path="/loginm" />
                    <Route element={<Loginow />} path="/login" />
                    <Route element={<Home />} path="/" />
                    <Route element={<h1>Not found!</h1>} />
                    <Route element={<UserPerfil />} path="/user/:id" />
                    <Route element={<RegisterPage />} path="/registern" />
                    <Route element={<Register />} path="/register" />
                    <Route element={<RecoveryPass />} path="/recovery" />
                    <Route element={<Tak />} path="/tak" />
                    <Route element={<PanelAdministrativo />} path="/panel_administrativo" />
                    {/* <Route element={<LoginUser />} path="/login" /> */}
                    <Route element={<Respira />} path="/respira" />
                    <Route element={<Donate />} path="donate" />
                    <Route element={<Error401 />} path="error401" />
                    <Route element={<Error403 />} path="error403" />
                    <Route element={<Error503 />} path="error503" />
                    <Route element={<HomeLogeado />} path="/home" />
                    <Route element={<ProteccionDeRutas currentUser={currentUser}><Challenges /></ProteccionDeRutas>} path="/challenges" />
                    <Route element={<RandomChallenge />} path="/challenges/random" />
                    {/* <Route element={<Challenge21Days />} path="/challenges/21days" /> */}
                    <Route element={<DayOf21Days />} path="/challenges/21days/a" />
                    {/* <Route element={<Start21days />} path="/challenges/21days/1" numvideo="4" numaudio="4" day="1" numnextday="2"/> */}
                    <Route element={<Day1 />} path="/challenges/21days/:current_day" />
                    <Route element={<Day2 />} path="/challenges/21days/2" />
                    <Route element={<Day3 />} path="/challenges/21days/3" />
                    <Route element={<Day4 />} path="/challenges/21days/4" />
                    <Route element={<Day5 />} path="/challenges/21days/5" />
                    <Route element={<Day6 />} path="/challenges/21days/6" />
                    <Route element={<Day7 />} path="/challenges/21days/7" />
                    <Route element={<Day8 />} path="/challenges/21days/8" />
                    <Route element={<Day9 />} path="/challenges/21days/9" />
                    <Route element={<Day10 />} path="/challenges/21days/10" />
                    <Route element={<Day11 />} path="/challenges/21days/11" />
                    <Route element={<Day12 />} path="/challenges/21days/12" />
                    <Route element={<Day13 />} path="/challenges/21days/13" />
                    <Route element={<Day14 />} path="/challenges/21days/14" />
                    <Route element={<Day15 />} path="/challenges/21days/15" />
                    <Route element={<Day16 />} path="/challenges/21days/16" />
                    <Route element={<Day17 />} path="/challenges/21days/17" />
                    <Route element={<Day18 />} path="/challenges/21days/18" />
                    <Route element={<Day19 />} path="/challenges/21days/19" />
                    <Route element={<Day20 />} path="/challenges/21days/20" />
                    <Route element={<Day21 />} path="/challenges/21days/21" />
                    <Route element={<Fail21Days />} path="/challenges/fail21days" />
                    <Route element={<Discover />} path="/discover" />
                    <Route element={<h1>Not found!</h1>} />
                    <Route element={<Storage />} path="/storage" />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div >
    );
};

export default injectContext(Layout);
