import Todo from './Todo/Todo';
import './Todos.css';

function Todos({ items, removeTask }){
	return (
		<div className="Todos">
			<h4>{'Current tasks'}</h4>
			{items.length 
				? items.map(item => <Todo key={item.id} item={item} removeTask={removeTask}/>)
				: 'All tasks completed'}
		</div>
	)
}

export default Todos;