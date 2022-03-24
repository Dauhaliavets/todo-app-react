import HomeHeader from './HomeHeader/HomeHeader';
import './Home.css';
import Form from './Form/Form';
import { useEffect, useState } from 'react';
import Todos from './Todos/Todos';

function Home(props) {
	// const [todos, setTodos] = useState([]);

	// useEffect(() => {
	// 	const storageTodos = localStorage.getItem('todos');
	// 	setTodos(JSON.parse(storageTodos));
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem('todos', JSON.stringify(todos));
	// }, [todos]);

	return (
		<div className="Home-container">
			<HomeHeader />
			<Form />
			<Todos />
		</div>
	)
}

export default Home;
