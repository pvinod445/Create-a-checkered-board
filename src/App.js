import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		boxes: 0
	}
	changeHandler = (event) => {
		this.setState({boxes: event.target.value});
	}
	render() {
		const checkBoxBlackStyle = {
			backgroundColor: 'black',
			width: '20px',
			height: '20px'
		};
		const checkBoxWhiteStyle = {
			backgroundColor: 'white',
			width: '20px',
			height: '20px'
		};
		let even = null;
		let odd = null;
		let rows = null;
		if(parseInt(this.state.boxes) > 0) {
			even = Array(parseInt(this.state.boxes)).fill().map((each, i) => {
				if(i%2 ==0 ){
					return <td style={checkBoxBlackStyle}></td>
				}
				else {
					return <td style={checkBoxWhiteStyle}></td>;
				}
			})
			odd = Array(parseInt(this.state.boxes)).fill().map((each, i) => {
				if(i%2 ==0 ){
					return <td style={checkBoxWhiteStyle}></td>
				}
				else {
					return <td style={checkBoxBlackStyle}></td>
				}
			});
			rows = Array(parseInt(this.state.boxes)).fill().map((each, i) => {
				if(i%2 == 0) {
					return <tr>{even}</tr>
				}
				else {
					return <tr>{odd}</tr>
				}
			});
		}

		return (
			<div style={{textAlign: 'center'}}>
				<input type='number' value={this.state.boxes} onChange={(event) => this.changeHandler(event)} />
				<table align='center'>
					{rows}
				</table>
			</div>
		);
	}
}
export default App;
