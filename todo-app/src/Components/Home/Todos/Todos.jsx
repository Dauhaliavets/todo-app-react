import { useSelector } from 'react-redux';
import Todo from './Todo/Todo';
import './Todos.css';

function Todos(){
	const todos = useSelector(state => state);

	return (
		<div className="Todos">
			<h4>{'Current tasks'}</h4>
			{todos.length
				? todos.map(todo => <Todo key={todo.id} item={todo}/>)
				: 'All tasks completed'}
		</div>
	)
}

export default Todos;