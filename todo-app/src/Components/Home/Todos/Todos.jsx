import './Todos.css';

function Todos({ items, removeTask }){
	return (
		<div className="Todos">
			{items.length 
				? items.map((item, index) => {
						return <div key={item.id} className="Todos-item">{index + 1}. {item.value}<span onClick={() => {removeTask(item.id)}}>X</span></div>
					})
				: 'Задач нет'}
		</div>
	)
}

export default Todos;