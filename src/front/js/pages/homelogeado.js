import React, { useState } from "react";
import CardList from "../component/homelogeado/cardlist";
import Input from "../component/homelogeado/imput";
import List from "../component/homelogeado/list";
import ElementsList from "../component/homelogeado/elementlist";
import ListDefault from "../component/homelogeado/listdefault";
import ListCounter from "../component/homelogeado/listcounter";
import "../../styles/homelogeado.css";
import { Actions } from "../component/homelogeado/actions";
import { Statistics } from "../component/homelogeado/statistics";



export const HomeLogeado = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
  
	function handleSubmit(e) {
	  e.preventDefault();
	  setList([...list, task]);
	  setTask("");
	}
	console.log(task);
	console.log(list);
  
	function handleDelete(i) {
	  const deleteTask = [...list];
	  deleteTask.splice(i, 1);
	  setList(deleteTask);
	}

	return (
		<div id="homelogeado">
			<CardList>
				<Input handleSubmit={handleSubmit} task={task} setTask={setTask} />
				<List>
					{list.length > 0 ? (
						list.map((task, i) => {
							return <ElementsList handleDelete={handleDelete} task={task} i={i} />;
						})
					) : (
						<ListDefault />
					)}
					<ListCounter list={list} />
				</List>
			</CardList>
			<br />
			<Actions />
			<Statistics />
		</div>
	);
};

 