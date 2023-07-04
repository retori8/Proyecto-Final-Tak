import React from "react";

export const CoverDiscover = (props) => {
	return (
		<div>
			<h1 className="title-discover">{props.title}</h1>
			<h5 className="subtitle-discover">{props.caption}</h5>
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

