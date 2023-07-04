import React from "react";
import NavItem from "./navItem";
import TabPanel from "./tabPanel";
import TablaUsers from "./tablaUsers";
import TablaAgradecimientos from "./tabalaAgradecimientos";

const Panel = () => {
    return (
        <div className="mt-5">

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <NavItem id="users" target="users" selected={true} label="Users" active={"active"} />
                <NavItem id="agradecimientos" target="agradecimientos" selected={false} label="Agradecimientos" />
            </ul>
            <div class="tab-content" id="myTabContent">
                <TabPanel aria="users" id="users" show={"show active"}>
                    <TablaUsers />
                </TabPanel>
                <TabPanel aria="agradecimientos" id="agradecimientos" >
                    <TablaAgradecimientos />
                </TabPanel>
            </div>

        </div>
    )
}

export default Panel;