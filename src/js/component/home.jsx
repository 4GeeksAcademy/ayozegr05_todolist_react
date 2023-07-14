import React from "react";
import TaskList from "./TaskList";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-4 container contenedorprincipal pb-3 px-0">
			<h1>To Do List</h1>
			<TaskList />
		</div>
	);
};

export default Home;
