import React from "react"

const NavItem = ({ id, target, selected, label, active }) => {
    return (
        <>
            <li class="nav-item" role="presentation">
                <button class={`${active ? active : ""} nav-link`}
                    id={id + "-tab"}
                    data-bs-toggle="tab"
                    data-bs-target={`#${target}-tab-pane`}
                    type="button"
                    role="tab"
                    aria-controls={target + "-tab-pane"}
                    aria-selected={`"${selected}"`}
                    style={{ backgroundColor: "rgb(246, 246, 238)" }}
                >
                    {label}
                </button>

            </li>
        </>
    )
}
export default NavItem;
