import React from 'react';
import { NavLink } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

class Hjem extends React.Component {
	render() {
		return (
			<>
				<PageHeader title="Velkommen til LG Rørleggerservice AS" />
				<section id="page_content">
					<section id="kontorer">
						<NavLink exact to="/kontorer/" className="title">
							Kontorer
						</NavLink>
					</section>
					<section id="kontakt">
						<NavLink exact to="/kontakt/" className="title">
							Kontakt
						</NavLink>
					</section>
					<section id="fagartikler">
						<NavLink exact to="/fagartikler/" className="title">
							Se våre fagartikler om oppussing av bad (todo: fiks link)
						</NavLink>
					</section>
				</section>
				<PageFooter />
			</>
		)
	}
}

export default Hjem;