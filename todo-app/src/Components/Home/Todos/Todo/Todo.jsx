import { useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../../../../Actions/todoActions';
import './Todo.css';

function Todo({ item: { name, description, id, isChecked } }) {
	const dispatch = useDispatch();

	return (
		<div className='Todo-item'>
			<div className='Todo-item_content'>
				<p className='Todo-item_name'>{name}</p>
				<p className='Todo-item_descripton'>{description}</p>
			</div>
			<div className='Todo-controls'>
				<span
					className={`Todo-toggle ${isChecked ? 'checked' : ''}`}
					onClick={() => dispatch(toggleTask(id))}
				></span>
				<span className='Todo-remove' onClick={() => dispatch(removeTask(id))}>
					+
				</span>
			</div>
		</div>
	);
}

export default Todo;
