const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'http://localhost/3001',
			email: '',
			password: '',
			re_password: '',
			name: '',
			lastname: '',
			users: '',
			newUser: {
				name: "",
				lastName: "",
				email: "",
				password: "",
			}
		},

		actions: {
			handleChange: e => {
				setStore({
					[e.target.name]: e.target.value
				})
			},

			getLogin: () => {
				const { email, password, url } = getStore();
				fetch(`${url}/users`, {
					method: 'POST',
					body: JSON.stringify({ email, password }),
					headers: {
						'Content-Type': 'application/json'
					}
				})
			},

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

			createNewUser: () => {
				const { url, name, lastname, email, password } = getStore();
				fetch(`${url}/new-user`, {
					method: 'POST',
					body: JSON.stringify({ name, lastname, email, password }),
					headers: {
						'Content-Type': 'application/json'
					}
				})
			},

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
			}
		}
	};
};

export default getState;
