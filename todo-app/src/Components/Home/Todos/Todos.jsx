import Todo from './Todo/Todo';
import './Todos.css';

function Todos({ items, removeTask }){
	return (
		<div className="Todos">
			{items.length 
				? items.map((item, index) => <Todo key={item.id} item={item} index={index} removeTask={removeTask}/>)
				: 'Задач нет'}
		</div>
	)
}

export default Todos;