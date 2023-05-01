//import React, { useState,useEffect } from "react";
import CardList from "../component/homelogeado/cardlist";
import Input from "../component/homelogeado/imput";
import List from "../component/homelogeado/list";
import ElementsList from "../component/homelogeado/elementlist";
import ListDefault from "../component/homelogeado/listdefault";
import ListCounter from "../component/homelogeado/listcounter";
import "../../styles/homelogeado.css";
import { Context } from "../store/appContext";
import { CardStatistics } from "../component/homelogeado/cardstatistics";
import { Actions } from "../component/homelogeado/actions";
import React, { useContext } from "react";


export const HomeLogeado = () => {

	const { store, actions } = useContext(Context);

	/*const [text, setText] = useState("");
	const [list, setList] = useState([]);

	useEffect(() => {
		initList();
	}, []);

	async function initList() {
		let get = await getList();
		if (get == false) {
			await createList();
			await getList();
		}
	};

	const getList = async () => {
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/carorb",
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

	function handleDelete(i) {
		const deleteTask = [...list];
		deleteTask.splice(i, 1);
		setList(deleteTask);
		updateTaskList(deleteTask);
	}*/


	return (
		<div id="homelogeado">
			<CardList>
				<Input handleSubmit={actions.handleSubmit} handleChange={actions.handleChange} />
				<List>
					{!!store.thanks &&
						store.thanks?.length > 0 ? (
						store.thanks?.map((thank, i) => {
							return (
								<ElementsList
									handleDelete={actions.handleDelete}
									thank={store.thanks?.list}
									i={i}
									key={store.thanks?.id}
								/>
							);
						})
					) : (
						<ListDefault />
					)}
					<ListCounter length={store.thanks?.length} />
				</List>
			</CardList>
			<br />
			<Actions />
			<div>
				<h1 className="text-center m-5">TUS AVANCES</h1>
				<br />
				<div className="container">
					<div className="row">
						<CardStatistics />
						<CardStatistics />
						<CardStatistics />
						<CardStatistics />
					</div>
				</div>
			</div>
		</div>
	);
};
