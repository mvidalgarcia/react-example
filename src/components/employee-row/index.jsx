import React from 'react'
import EmployeeAvatar from '../employee-avatar'

class EmployeeRow extends React.Component {
	render() {
		return (
			<li className="media">
			  <EmployeeAvatar picture={this.props.picture} />
			  <div className="media-body">
			    <h4>{this.props.name}</h4>
			    <p>
			      {this.props.title} &nbsp;
			      <span className="label label-info">{this.props.department}</span>
			    </p>
			  </div>
			</li>
		)
	}
}

export default EmployeeRow