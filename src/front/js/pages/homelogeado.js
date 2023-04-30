import React, { useContext } from "react";
import CardList from "../component/homelogeado/cardlist";
import Input from "../component/homelogeado/imput";
import List from "../component/homelogeado/list";
import ElementsList from "../component/homelogeado/elementlist";
import ListDefault from "../component/homelogeado/listdefault";
import ListCounter from "../component/homelogeado/listcounter";
import "../../styles/homelogeado.css";
import { Context } from "../store/appContext";
import { CardStatistics } from "../component/homelogeado/cardstatistics";



export const HomeLogeado = () => {

	const { store, actions } = useContext(Context);
	const { text, list } = store
	const { handleSubmit } = actions

	return (
		<div id="homelogeado">
			<CardList>
				<Input handleSubmit={actions.handleSubmit} text={store.text} setText={actions.handleSubmit.setText} />
				<List>
					{list.length > 0 ? (
						list.map((task, i) => {
							return (
								<ElementsList
									handleDelete={actions.ContexthandleDelete}
									text={store.text}
									i={i}
								/>
							);
						})
					) : (
						<ListDefault />
					)}
					<ListCounter list={store.list} />
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

