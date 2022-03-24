const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TASK':
			return [
				...state,
				{
					id: action.id,
					name: action.name,
					description: action.description,
					isChecked: false,
				}
			]
		case 'REMOVE_TASK':
			return state.filter(todo => todo.id !== action.id);
		case 'TOGGLE_TASK':
			return state.map(todo => 
				todo.id === action.id 
					? {...todo, isChecked: !todo.isChecked}
					: todo);
		default:
			return state;
	}
}

export default todos;