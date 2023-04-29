const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			email: null,
			password: null,
		},
		actions: {
			handleEmail: (event) => {
				setStore({ email: event.target.value })
			},

			handlePassword: (event) => {
				setStore({ password: event.target.value })
			},

			handleClick: () => {
				console.log("click");
			},
		}
	};
};

export default getState;
