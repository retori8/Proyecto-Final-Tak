const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			url: "http://127.0.0.1:3001",
			archivos: [],
			books: null,
			podcasts: null,
			movies: null,
			challenge_21_days: null,
			thanks: [],
			thanks_user: null,
			thanks_by_user: null,
			tareas_random: ["Hoy escribele una carta de agradecimiento a alguien que haya influido positivamente en tu vida.", "Hoy proponte decirle a una persona amiga algo que aprecias de ella", "Hoy mírate en el espejo mientras te lavas los dientes, y piensa en algo que has hecho bien recientemente o algo que te gusta de ti", "Hoy sal a caminar y mira cuantas cosas positivas puedes encontrar en tu camino, agudiza tus sentidos al máximo para encontrar las cosas que antes pasaban desapercibidas.", "Hoy disponte a comer disfrutando de cada bocado, con todos tus sentidos, despierta tu olfato, observa los colores, siente la temperatura y agradece el privilegio que tienes al gozar de esta comida."],
			random: null,
			thank: {
				list: "",
				date: "",
				users_id: ""
			},

			currentUser: null,
			id: null,
			//SIMON
			email: '',
			password: '',
			re_password: '',
			name: '',
			lastname: '',
			users: '',
			newUser: {
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				re_password: ''
			},
			error:""
		},

		actions: {

			//login-----------------------------------------------------------------------------------------------------------------

			getLogin: async (e, navigate) => {
				e.preventDefault();
				try {
					const { url, email, password } = getStore();
					let info = { email, password };
					const response = await fetch(`${url}/api/login`, {
						method: 'POST',
						body: JSON.stringify(info),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					console.log(response)
					const data = await response.json()
					console.log(data)

					if (data.access_token) {
						setStore({ currentUser: data })
						sessionStorage.setItem('currentUser', JSON.stringify(data))

						navigate('/home')
					} else{
						alert("Lo siento aun no estas registrado(a)")
					}

				} catch (error) {
					console.log(error)
					console.log("hay un error en el login");
				}
			},

			handleChange: e => {
				setStore({
					[e.target.name]: e.target.value
				})
			},

			checkUser: () => {
				if (sessionStorage.getItem('currentUser')) {
					setStore({
						currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
					})
				} 
			},

			/* handlePasswordValidate(e){
				const { newUser } = getStore()
				e.preventDefault();
				
			}, */

			logout: () => {
				if (sessionStorage.getItem('currentUser')) {
					setStore({
						currentUser: null
					})
					sessionStorage.removeItem('currentUser')
				}
			},

			//register----------------------------------------------------------------------------------------------------------------------

			createNewUser: async (navigate) => {
				try {
					const { url, newUser } = getStore();
					const response = await fetch(`${url}/api/register`, {
						method: 'POST',
						body: JSON.stringify({ ...newUser }),
						headers: {
							'Content-Type': 'application/json'
						}
					})

					const data = await response.json()
					console.log(data)

					// setStore({ newUser: data })
					// sessionStorage.setItem('newUser', JSON.stringify(data))
					navigate('/login')

				} catch (error) {
					console.log(error);
				}
			},

			handleSubmitRegister: (e, navitgate) => {
				e.preventDefault();
				console.log(getStore());
				if (getStore().newUser.re_password === getStore().newUser.password) {

					getActions().createNewUser(navitgate);
				}
				else {
					alert("Las contraseñas no coinciden")
				}
			},

			handleChangeObjUser(e) {
				const { newUser } = getStore()
				e.preventDefault();
				// if(getStore().newUser.name.length < 3){
				// 	alert("El campo de nombre debe tener minimo 3 caracteres")
				// };

				// if(getStore().newUser.lastname.length < 3){
				// 	alert("El campo de apellido debe tener minimo 3 caracteres")
				// };
				// if(getStore().newUser.email.length < 8 ){
				// 	alert("El campo de apellido debe tener minimo 3 caracteres")
				// };

				newUser[e.target.name] = e.target.value
				setStore({ newUser })
				console.log(getStore().newUser[e.target.name])
			},

			validate(){
				if(getStore().newUser.first_name === ""){
					setStore({ error:"El campo de nombre es obligatorio"})
				};
				if(getStore().newUser.re_password !== getStore().newUser.password){
					setStore({ error:"Ambos campos de contraseña deben coincidir"})
				}

			},

			//recovery----------------------------------------------------------------------------------------------------------------------

			getRecovery: () => {
				const { email, url } = getStore();
				fetch(`${url}/user-recovery`, {
					method: 'POST',
					body: JSON.stringify({ email }),
					headers: {
						'Content-Type': 'application/json'
					}
				})
			},

			//Thanks----------------------------------------------------------------------------------------------------------------------


			getThanks: async () => {
				const { url, thank, currentUser } = getStore()
				const options = {
					method: "POST",
					body: JSON.stringify({ ...thank }),
					headers: {
						"Content-Type": "application/json",
						'Authorization': `Bearer ${currentUser?.access_token}`
					},
				}
				try {
					const response = await fetch(
						`${url}/thanks`, options
					);
					let data_thank = await response.json()
					console.log(data_thank)

					// setStore({
					// 	thanks: data_thank
					// })

				} catch (error) {
					console.log(error);
				}

			},

			getThanksByUser: async () => {
				try {
					const { currentUser, url } = getStore()
					const options = {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${currentUser?.access_token}`
						}
					}
					const response = await fetch(`${url}/api/thanks/${currentUser?.user?.id}`, options)
					const data = await response.json();

					setStore({
						thanks_user: data
					})

				} catch (error) {

				}
			},

			handleSubmit(e) {
				e.preventDefault();
				const { thanks } = getStore()
				const { thank } = getStore()
				let setchange = { ...thank }
				setStore({
					thanks: [...thanks, setchange]
				})
				e.target.reset()
				getActions().getThanks()
				console.log(getStore().thanks)
			},

			handleDelete(i) {
				const { thanks } = getStore()
				thanks.splice(i, 1);
				setStore({ thanks: thanks });
			},

			handleChangeObj(e) {
				const { thank } = getStore()
				e.preventDefault();
				thank.list = e.target.value
				thank.user_id =
					setStore({
						thank: { ...thank }
					})
				console.log(getStore().thank)
			},

			deleteThank: async () => {
				const { url } = getStore()
				const options = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				};
				try {
					const response = await fetch(`${url}/api/thanks/${id}`,
						options
					);
					if (response.status == 200) {
						setStore({ thanks: thanks.delete.thanks.id });
					}
				} catch (error) {
					console.log(error);
				}
			},


			//RANDOM----------------------------------------------------------------------------------------------------------------------

			getRandom() {
				const { tareas_random } = getStore()
				let index = Math.floor(Math.random() * tareas_random.length)
				setStore({ random: tareas_random[index] })
			},

			//books-----------------------------------------------------------------------------------------------------
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
			//movies-----------------------------------------------------------------------------------------------------
			getMovies: async () => {
				const { url } = getStore()
				try {
					const response = await fetch(`${url}/api/movies`, {
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
			//podcast-----------------------------------------------------------------------------------------------------
			getPodcasts: async () => {
				const { url } = getStore()
				try {
					const response = await fetch(`${url}/api/podcasts`, {
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

			//NO OCUPADOS AUN----------------------------------------------------------------------------------------------------------------------


			getUser: async () => {
				try {
					const response = await fetch(`${url}/api/users`, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						},
					});
					if (response.status === 404) throw Error('Page not found');
					const user_info = await response.json();

					setStore({
						users: user_info,
					});

					console.log(users);
				} catch (error) {
					console.log(error.message);
				}
			},



			getChallenge21Days: async () => {
				const { url } = getStore()
				const { challenge_21_days } = getStore();

				try {
					const response = await fetch(`${url}/api/challenges`, {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const challenge_info = await response.json();

					setStore({
						challenge_21_days: challenge_info
					});

				} catch (error) {
					console.log(error.message);
				}
			},



			//audiosStorage-----------------------------------------------------------------------------------------------------

			getArchivos: async () => {
				const { url } = getStore()

				try {
					const response = await fetch(`${url}/uploads`, {
						metod: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (response.status === 404) throw Error("Page not found");
					const archivos_info = await response.json();

					setStore({
						archivos: archivos_info,
					});
				} catch (error) {
					console.log(error.message);
				}
			},

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

			// handleSubmitRegister: e => {
			// 	const { createNewUser } = getActions()
			// 	console.log(store);
			// 	e.preventDefault();
			// 	if (store.newUser.re_password.length > 0) {
			// 		if (store.newUser.password !== store.newUser.re_password) {
			// 			console.log("Las contraseñan no son iguales")
			// 		}
			// 		else {
			// 			createNewUser();
			// 		}
			// 	}
			// },

			comprobarLogin(navigate) {
				console.log(getStore().currentUser)
				if (getStore().currentUser !== null) {
					getActions().logout()
					navigate('/login')
				}
				else {
					navigate('/login')
				}
			},

			getFavoritos() {
				getActions().getFavoritosBooks()
			},

			getFavoritosBooks() {

			},
			//--------------------------------------------------------------------------------------------
			// next(navigate){
			// 	navigate('/challenges/21days/2')
			// }
			

		}
	}
};

export default getState;
