import React from 'react';
import styled from 'styled-components'

import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import Office from '../components/Office';
import Search from '../components/Search';

import { allLocations} from '../assets/js/allLocations';

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

class Kontorer extends React.Component {
	constructor() {
		super();

		this.loadSamples = this.loadSamples.bind(this);
		this.search = this.search.bind(this);

		this.state = {
			theOffices: {},
			allLocations: {},
			search: null,
			viewtype: false,
		};
	};

	componentDidMount() {
		this.loadSamples();
	};

	loadSamples() {
		this.setState({
			allLocations: allLocations,

		});
	};

	generateOffices() {
		const offices = Object.keys(this.state.theOffices);
		if (offices.length > 0) {
			const office = Object.keys(this.state.theOffices)
			.map((key) => (
				<Office 
					key={key}
					keyID={key}
					details={this.state.theOffices[key]}
				/>
			));
			return office;
		}
		return <h2>Her var det tomt..</h2>
	};

	search(keyword) {
		this.setState({ search: keyword });
	};

	toggleClass(listType) {
		// TODO: Enter some code here to change className and how the list is viewed.. grid-view or list-view
	};

	render() {

		const allOfficeLocations = Object.values(this.state.allLocations)
			.filter((data) => {
				if (this.state.search == null) {
					return data;
				}
				if (
					data.title
						.toLowerCase()
						.includes(this.state.search.toLowerCase()) ||
					data.address
						.toLowerCase()
						.includes(this.state.search.toLowerCase()) ||
					data.phone
						.toLowerCase()
						.includes(this.state.search.toLowerCase()) ||
					data.location
						.toLowerCase()
						.includes(this.state.search.toLowerCase())
				) {
					return data;
				}
			})
			.map((data) => (
				<Section>
					<Title>{data.title}</Title>
					<Address>{data.address} {data.id}</Address>
					<Phone>{data.phone}{data.id}</Phone>
					<Mail href={`mailto:${data.location}${data.id}@epost.no`}>{data.location}{data.id}@epost.no</Mail>
				</Section>
			))

		return (
			<>
				<PageHeader title="Våre kontorer" />
				
				<section className="officeContent">
					<section className="viewOptions">
						<Search search={this.search} />
						<button type="button" className="listview" onClick={this.toggleClass()} ></button>
						<button type="button" className="gridview" onClick={this.toggleClass()}></button>
					</section>
					
					<section className="branch">
						<section id="officeLocations" className="gridOffices">
							{allOfficeLocations}
						</section>
					</section>
				</section>
				<PageFooter />
			</>
		)
	}
}

export default Kontorer;