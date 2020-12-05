import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	border: 1px solid black;
	padding: 20px;
`;

const Title = styled.p`
	font-size: 16px;
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 5px;
`;

const Address = styled.p`
	margin: 0;
`;

const Phone = styled.p`
	margin: 0;
`;

const Mail = styled.a`
	margin: 0;
`;

class Office extends React.Component {
	render() {
		
		return (
			<>
				<Section>
					<Title>{this.props.data.title} </Title>
					<Address>{this.props.data.address} </Address>
					<Phone>{this.props.data.phone}</Phone>
					<Mail href={`mailto:${this.props.data.location}@epost.no`}>{this.props.details.location}@epost.no</Mail>
				</Section>
			</>
		)
	}
}

export default Office;