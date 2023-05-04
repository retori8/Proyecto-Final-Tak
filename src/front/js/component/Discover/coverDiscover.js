import React from "react";

export const CoverDiscover = (props) => {
	return (
        <div>
            <h1 className="text-center m-5">{props.title}</h1>
			<h5 className="text-center mb-5">{props.caption}</h5>
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

