import React from "react";
import NavItem from "./navItem";
import TabPanel from "./tabPanel";
import TablaUsers from "./tablaUsers";
import TablaAgradecimientos from "./tabalaAgradecimientos";
import TablaSolicitudes from "./tablaSolicitudes";

const Panel = () => {
    return (
        <div className="mt-5">

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <NavItem id="users" target="users" selected={true} label="Users" active={"active"} />
                <NavItem id="agradecimientos" target="agradecimientos" selected={false} label="Agradecimientos" />
                {/* <NavItem id="solicKitudes" target="solicitudes" selected={false} label="Solicitudes" /> */}
            </ul>
            <div class="tab-content" id="myTabContent">
                <TabPanel aria="users" id="users" show={"show active"}>
                    <TablaUsers />
                </TabPanel>
                <TabPanel aria="agradecimientos" id="agradecimientos" >
                    <TablaAgradecimientos />
                </TabPanel>
                {/* <TabPanel aria="solicitudes" id="solicitudes" >
                    <TablaSolicitudes />
                </TabPanel> */}
            </div>

        </div>
    )
}

export default Panel;