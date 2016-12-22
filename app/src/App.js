import React, { Component } from 'react';
import './App.css';
import './lib/font-awesome-4.7.0/css/font-awesome.min.css';
import Main from './Main/Main';

class App extends Component {
	render() {
	return (
		<div className="App">
			<Main>{this.props.children}</Main>
		</div>
	);
	}
}

export default App;
