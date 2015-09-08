import React from 'react'
import EmployeeList from '../employee-list'

class EmployeeApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = { employees: [] }
	}

	/* It is released before the component is rendered */
	componentWillMount() {
		fetch('http://taller-angular.carlosazaustre.es/empleados') // ES6 AJAX request
		.then((response) => {
			return response.json()
		})
		.then((employees) => {
			this.setState({employees: employees})
		})
	}

	render() {
		if (this.state.employees.length > 0) {
			return(
				<div className="container-fluid">
				  <EmployeeList list={this.state.employees} />
				</div>
			)
		}
		else {
			return <p className="text-center">Loading employees...</p>
		}

	}
}

export default EmployeeApp