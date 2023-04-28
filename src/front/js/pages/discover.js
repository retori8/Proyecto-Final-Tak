import React from "react";
import "../../styles/discover.css"
import { CardBook } from "../component/Discover/cardBook";
import { CardPodcats } from "../component/Discover/cardPodcat";
import { CardMovie } from "../component/Discover/cardMovie";
import { CoverDiscover } from "../component/Discover/coverDiscover";


export const Discover = () => {
	return (
		<div>
			<br/>
			<CoverDiscover>
				<CardBook />
				<CardBook />
				<CardBook />
				<CardBook />
			</CoverDiscover>
			<CoverDiscover>
				<CardPodcats />
				<CardPodcats />
				<CardPodcats />
				<CardPodcats />
			</CoverDiscover>
			<CoverDiscover>
				<CardMovie />
				<CardMovie />
				<CardMovie />
				<CardMovie />
			</CoverDiscover>
			<br/>
			<br/>
			<br/>
		</div>
	);
};