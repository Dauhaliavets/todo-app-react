import './Todo.css';

function Todo({ item, removeTask }) {
	return (
		<div className="Todo-item">
			<div className="Todo-item_content">
				<p className="Todo-item_name">{item.value}</p>
				<p className="Todo-item_descripton">{item.description}</p>
			</div>
			
			<span onClick={() => {removeTask(item.id)}} className="Todo-remove">+</span>
		</div>
	)
}

export default Todo;