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

	

	/*function handleDelete(i) {
		const deleteTask = [...list];
		deleteTask.splice(i, 1);
		setList(deleteTask);
		updateTaskList(deleteTask);
	}*/


	return (
		<div id="homelogeado">
			<CardList>
				<Input handleSubmit={actions.handleSubmit} handleChange={actions.handleChange}/>
				<List>
					{!!store.thanks && //es distinto de null
						store.thanks?.length > 0 ? ( //es mayor a cero
						store.thanks?.map((thank, i) => { //mapealo
							return (
								<ElementsList
									handleDelete={actions.handleDelete}
									thank={thank?.list}
									i={i}
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
