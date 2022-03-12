import './HomeHeader.css';

function HomeHeader(props) {
	return (
		<div className='HomeHeader'>
			<h2 className='HomeHeader-title'>{props.title}</h2>
			<div className="HomeHeader-footer"></div>
		</div>
	);
}

export default HomeHeader;
