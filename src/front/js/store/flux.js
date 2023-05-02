import { Actions } from "../component/homelogeado/actions";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//email: null,
			//password: null,
			url: "http://127.0.0.1:3001",
			books: null,
			podcasts: null,
			movies: null,
			thanks: [],
			thanks_by_user: null,
			thank: {
				list: "",
				date: "",
				users_id: ""
			},
			//list: null,
			//text: null,
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
				const { url } = getStore()
				try {
					const response = await fetch(`${url}/api/books`, {
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
			//thank-----------------------------------------------------------------------------------------------------4

			getThanks: async () => {
				const { thanks } = getStore

				try {
					const response = await fetch("http://127.0.0.1:3001/api/thanks", {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const thanks_info = await response.json();

					setStore({
						thanks: thanks_info,
					});
					console.log(thanks);
				} catch (error) {
					console.log(error.message);
				}
			},

			getThanksByUser: async () => {
				const { thanks_by_user } = getStore();

				try {
					const response = await fetch(`http://127.0.0.1:3001/api/thanks/${id}`, {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const thanks_user = await response.json();

					setStore({
						thanks_by_user: thanks_user,
					});
					console.log(thanks_by_user);
				} catch (error) {
					console.log(error.message);
				}
			},

			deleteThank: async () => {
				const options = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				};
				try {
					const response = await fetch(
						`http://127.0.0.1:3001/api/thanks/${id}`,
						options
					);
					if (response.status == 200) {
						setStore({ thanks: thanks.delete.thanks.id });
					}
				} catch (error) {
					console.log(error);
				}
			},

			addThank: async () => {
				const { thank } = getStore()
				console.log(thank)
				const options = {
					method: "POST",
					body: JSON.stringify({ ...thank }),
					headers: {
						"Content-Type": "application/json",
					},
				}
				try {
					const response = await fetch(
						`http://127.0.0.1:3001/api/thanks`, options
					);
					let data_thank = await response.json()


				} catch (error) {
					console.log(error);
				}

			},

			/*createThank: () => {
				const { thank } = getStore();
				fetch("http://127.0.0.1:3001/api/thanks", {
					metod: "POST",
					body: JSON.stringify({ thank }),
					headers: {
						"Content-Type": "application/json",
					},
				});
			},*/


			handleChange(e) {
				const { thank } = getStore()
				e.preventDefault();
				thank.list = e.target.value
				setStore({
					thank: { ...thank }
				})
				console.log(getStore().thank)
			},

			handleSubmit(e) {
				e.preventDefault();
				const { thanks } = getStore()
				const { thank } = getStore()
				thank.users_id = 10
				setStore({
					thanks: [...thanks, thank.users_id]
				})
				e.target.reset()
				getActions().addThank()
				console.log(getStore().thanks)
			},

			handleDelete(i) {
				const { thanks } = getStore()
				thanks.splice(i, 1);
				setStore({ thanks: thanks });
			},


		},
		//-------------------------------------------------------------------------------------------------------------------------
		/*async initList() {
			let get = await getList();
			if (get == false) {
				await createList();
				await getList();
			}
		},

		getList = async () => {
			const options = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			};
			try {
				const response = await fetch(
					"http://127.0.0.1:3001/api/thanks",
					options
				);

				if (response.status == 200) {
					const respuesta = await response.json();
					setList(respuesta);
					return respuesta;
				} else {
					return false;
				}
			} catch (error) {
				console.log(error);
				return false;
			}
		},

		createList = async () => {
			const options = {
				method: "POST",
				body: JSON.stringify([]),
				headers: {
					"Content-Type": "application/json",
				},
			};
			try {
				console.log(options);
				const response = await fetch(
					"http://127.0.0.1:3001/api/thanks",
					options
				);
				const data = await response.json();
				console.log("Note Saved");
				console.log(data, "esta es la data");
				if (data.id) {
				}
			} catch (error) {
				console.log(error);
			}
		},

		handleSubmit(e) {
			e.preventDefault();
			let task = { label: "", done: false };
			task.label = text;
			let newlist = [...list, task];
			setList(newlist);
			addTaskList(newlist);
			setText("");
			console.log(newlist, "este es el newlist");
		},

		addTaskList = async (task) => {
			const options = {
				method: "PUT",
				body: JSON.stringify(task),
				headers: {
					"Content-Type": "application/json",
				},
			};
			try {
				const response = await fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/carorb",
					options
				);
				const data = await response.json();
				if (data.id) {
					getList();
				}
			} catch (error) {
				console.log(error);
			}
		},

		updateTaskList = async (task) => {
			const options = {
				method: "PUT",
				body: JSON.stringify(task),
				headers: {
					"Content-Type": "application/json",
				},
			};
			try {
				const response = await fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/carorb",
					options
				);
				const data = await response.json();
				if (data.id) {
					getList();
					setList((prevState) => prevState.filter((list) => list.id !== id));

				}
			} catch (error) {
				console.log(error);
			}
		},

		handleDelete(i) {
			const deleteTask = [...list];
			deleteTask.splice(i, 1);
			setList(deleteTask);
			updateTaskList(deleteTask);
		}



	//-----------------------------------------------------------------------------------------------------
	/*addFavorite(fav) {
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


		/*useEffect(() => {
			initList();
		}, []);
		
		async function initList() {
			let get = await getList();
			if (get == false) {
				await createList();
				await getList();
			}
		};
		
		
		const createList = async () => {
			const options = {
				method: "POST",
				body: JSON.stringify([]),
				headers: {
					"Content-Type": "application/json",
				},
			};
			try {
				console.log(options);
				const response = await fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/carorb",
					options
				);
				const data = await response.json();
				console.log("Note Saved");
				console.log(data, "esta es la data");
				if (data.id) {
				}
			} catch (error) {
				console.log(error);
			}
		};
		
		function handleSubmit(e) {
			e.preventDefault();
			let task = { label: "", done: false };
			task.label = text;
			let newlist = [...list, task];
			setList(newlist);
			addTaskList(newlist);
			setText("");
			console.log(newlist, "este es el newlist");
		};
		
		const addTaskList = async (task) => {
			const options = {
				method: "PUT",
				body: JSON.stringify(task),
				headers: {
					"Content-Type": "application/json",
				},
			};
			try {
				const response = await fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/carorb",
					options
				);
				const data = await response.json();
				if (data.id) {
					getList();
				}
			} catch (error) {
				console.log(error);
			}
		};
		
		const updateTaskList = async (task) => {
			const options = {
				method: "PUT",
				body: JSON.stringify(task),
				headers: {
					"Content-Type": "application/json",
				},
			};
			try {
				const response = await fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/carorb",
					options
				);
				const data = await response.json();
				if (data.id) {
					getList();
					setList((prevState) => prevState.filter((list) => list.id !== id));
		
				}
			} catch (error) {
				console.log(error);
			}
		};
		
		function handleDeleteThank(i) {
			const deleteTask = [...list];
			deleteTask.splice(i, 1);
			setList(deleteTask);
			updateTaskList(deleteTask);
		}*/
	};
};

export default getState;
