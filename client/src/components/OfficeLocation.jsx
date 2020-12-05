import React from 'react';
import Office from '../components/Office';

class OfficeLocation extends React.Component {
	render() {

		return (
			<>
				<section className="location">
					<h2>{this.props.details.location}</h2>
					
				</section>
			</>
		)
	}
}

export default OfficeLocation;