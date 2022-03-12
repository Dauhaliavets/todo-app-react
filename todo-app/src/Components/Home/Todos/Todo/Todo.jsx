import './Todo.css';

function Todo({ item, index, removeTask }) {
	return (
		<div className="Todo-item">
			{index + 1}. {item.value}
			<span onClick={() => {removeTask(item.id)}} className="Todo-remove">+</span>
		</div>
	)
}

export default Todo;