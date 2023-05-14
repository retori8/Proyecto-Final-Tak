import React from "react";

const TabPanel = ({ id, aria, children, show }) => {
    return (
        <div className={"tab-pane fade " + show} id={id + "-tab-pane"} role="tabpanel" aria-labelledby={aria + "-tab"} tabindex="0">
            {children}
        </div>
    )
}

export default TabPanel; 