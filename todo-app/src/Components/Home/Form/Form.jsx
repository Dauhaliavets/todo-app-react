import { useState } from "react";
import './Form.css'

function Form(props) {
	const [name, setName] = useState('');

	const handlerSubmit = (e) => {
		e.preventDefault();
		props.addTask(name);
		setName('')
	}

	const onChange = (e) => {
		setName(e.target.value);
	}

	return (
		<form onSubmit={handlerSubmit} className="Form">
			<input
				type="text"
				placeholder="Введите задачу..."
				onChange={onChange}
				value={name}
				className="Form-input"></input>
			<button className="Form-button">+</button>
		</form>
	);
}

export default Form;