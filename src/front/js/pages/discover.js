import React from "react";
import "../../styles/discover.css"
import { CardBook } from "../component/Discover/cardBook";
import { CardPodcats } from "../component/Discover/cardPodcat"; 
import { useContext } from "react";
import { CardMovie } from "../component/Discover/cardMovie"; 
import { CoverDiscover } from "../component/Discover/coverDiscover";
import { Context } from "../store/appContext";
import { CoverDocu } from "../component/Discover/coverDocu";


export const Discover = () => {

	const { store } = useContext(Context);

	return (
		<div className="content-discover">
			<br />
			<CoverDiscover title={"Libros"} caption={"Estas son nuestras mejores recomendaciones de libros para tí."}>
				 {!!store.books &&
					store.books?.length > 0 &&
					store.books?.map((book, i) => {
						return (
							<CardBook
								img={book?.image?.archivo}
								name={book?.name}
								author={book?.author}
								number_of_pages={book?.number_of_pages}
								properties={book?.properties}
								id={`/books/${book?.id}`}
							/>
						);
					})} 
			</CoverDiscover>
			 <CoverDiscover title={"Podcasts"} caption={"Estas son nuestras mejores recomendaciones de podcast para tí."}>
				{!!store.podcasts &&
					store.podcasts?.length > 0 &&
					store.podcasts?.map((podcast, i) => {
						return (
							<CardPodcats
								img={podcast?.image?.archivo}
								name={podcast?.name}
								podcaster={podcast?.podcaster}
								featured_episodes={podcast?.featured_episodes}
								properties={podcast?.properties}
								id={`/podcasts/${podcast?.id}`}
							/>
						);
					})}
			</CoverDiscover>
			<CoverDiscover title={"Audiovisuales"} caption={"Te recomendamos que mires estos documentales, te encantarán."}>
				{!!store.movies &&
					store.movies?.length > 0 &&
					store.movies?.map((movie, i) => {
						return (
							<CardMovie
								img={movie?.image?.archivo}
								name={movie?.name}
								director={movie?.director}
								duration={movie?.duration}
								properties={movie?.properties}
								id={`/movies/${movie?.id}`}
							/>
						);
					})}
			</CoverDiscover> 
			<br />
			<br />
			<br />
		</div >
	);
};