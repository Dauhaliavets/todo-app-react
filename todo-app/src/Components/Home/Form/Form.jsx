import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../Actions/todoActions';
import './Form.css';

function Form() {
	const dispatch = useDispatch();
	
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const handlerSubmit = (e) => {
		e.preventDefault();

		if(name && description) {
			dispatch(addTask(name, description));
		}

		setName('');
		setDescription('');
	};

	const onChange = (e) => {
		setName(e.target.value);
	};

	const onChangeDescription = (e) => {
		setDescription(e.target.value);
	}

	return (
		<form onSubmit={handlerSubmit} className='Form'>
			<div>
				<input
					type='text'
					placeholder='Введите задачу...'
					onChange={onChange}
					value={name}
					className='Form-input'
				></input>
				<textarea
					placeholder='Введите описание задачи...'
					onInput={onChangeDescription}
					value={description}
					className='Form-textarea'
				></textarea>
			</div>
			<button className='Form-button'>+</button>
		</form>
	);
}

export default Form;
