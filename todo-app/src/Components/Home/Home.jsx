import HomeHeader from './HomeHeader/HomeHeader';
import './Home.css';
import Form from './Form/Form';
import { useState } from 'react';
import Todos from './Todos/Todos';

function Home(props) {
	const [todos, setTodos] = useState([]);

	const addTask = (inputValue) => {
		if(inputValue) {
			const newItem = {
				id: Math.round(Math.random() * 10000),
				value: inputValue,
				isCheked: false,
			}
			setTodos([...todos, newItem]);
		}
	}

	const removeTask = (id) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	return (
		<div className="Home-container">
			<HomeHeader title={props.title}/>
			<Form addTask={addTask}/>
			<Todos items={todos} removeTask={removeTask}/>
		</div>
	)
}

export default Home;
