// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
	const buttonText = { text: 'Click Me!'};

	return (
		<div>
			<label className="label" htmlFor="name">Enter name:</label>
			<input type="text"></input>
	<button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);