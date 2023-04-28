import React from "react";

export const CoverDiscover = (props) => {
	return (
        <div>
            <h1 className="text-center m-5">Libros</h1>
			<h5 className="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
			<div className="container-fluid">
				<div className="px-lg-5">
					<div className="row">
						{props.children}
					</div>
				</div>
			</div>
        </div>
	);
};
