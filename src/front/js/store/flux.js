const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//email: null,
			//password: null,
			books: null,
			podcasts: null,
			movies: null,
			favorite: [],
		},
		actions: {
			/*handleEmail: (event) => {
				setStore({ email: event.target.value })
			},

			handlePassword: (event) => {
				setStore({ password: event.target.value })
			},

			handleClick: () => {
				console.log("click");
			},*/

			//----------------------------------------------------------------
			getBooks: async () => {
				try {
					const response = await fetch("http://127.0.0.1:3001/api/books", {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const books_info = await response.json();

					setStore({
						books: books_info,
					});
					console.log(books);
				} catch (error) {
					console.log(error.message);
				}
			},

			getMovies: async () => {
				try {
					const response = await fetch("http://127.0.0.1:3001/api/movies", {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const movies_info = await response.json();

					setStore({
						movies: movies_info,
					});
					console.log(movies);
				} catch (error) {
					console.log(error.message);
				}
			},

			getPodcasts: async () => {
				try {
					const response = await fetch("http://127.0.0.1:3001/api/podcasts", {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const podcasts_info = await response.json();

					setStore({
						podcasts: podcasts_info,
					});
					console.log(podcasts);
				} catch (error) {
					console.log(error.message);
				}
			},


		},

		addFavorite(fav) {
			const { favorite } = getStore();
			let listafav = [...favorite, fav];
			setStore({ favorite: listafav });
		},
		handleDelete(i) {
			const { favorite } = getStore()
			favorite.splice(i, 1);
			setStore({ favorite: favorite });
		},

		/*<ul className="dropdown-menu"> menu
				  
				  {!!favorite &&
					favorite.length > 0 &&
					favorite.map((fav, index) => {
					  console.log(favorite)
					  return (
						<Favorites fav={fav} i={index}/>
					  );
					})}
				</ul><ul className="dropdown-menu">
				  
				  {!!favorite &&
					favorite.length > 0 &&
					favorite.map((fav, index) => {
					  console.log(favorite)
					  return (
						<Favorites fav={fav} i={index}/>
					  );
					})}
				</ul>*/
	};
};

export default getState;
