import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<Home title={'Todo App'}/>
		</div>
	);
}

export default App;
