import React, { useContext } from "react";
import CardList from "../component/homelogeado/cardlist";
import Input from "../component/homelogeado/imput";
import List from "../component/homelogeado/list";
import ElementsList from "../component/homelogeado/elementlist";
import ListDefault from "../component/homelogeado/listdefault";
import ListCounter from "../component/homelogeado/listcounter";
import "../../styles/homelogeado.css";
import { Context } from "../store/appContext";
import { Actions } from "../component/homelogeado/actions";




export const HomeLogeado = () => {

	const { store, actions } = useContext(Context);


	return (
		<div id="homelogeado">
			<CardList>
				<Input className="input-gracias" handleSubmit={actions.handleSubmit} handleChange={actions.handleChangeObj} />
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
			<Actions />
		</div>
	);
};
