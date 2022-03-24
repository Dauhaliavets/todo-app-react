const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';

let nextTodoId = 0;

const addTask = (name, description) => {
	return {
		type: ADD_TASK,
		id: nextTodoId++,
		name,
		description,
	}
}

const removeTask = (id) => {
	return {
		type: REMOVE_TASK,
		id,
	}
}

const toggleTask = (id) => {
	return {
		type: TOGGLE_TASK,
		id,
	}
}

export { addTask, removeTask, toggleTask };