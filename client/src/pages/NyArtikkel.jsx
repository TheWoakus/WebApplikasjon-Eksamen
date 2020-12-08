import React from 'react';
import { NavLink } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import ArticleForm from '../components/ArticleForm';
import PageFooter from '../components/PageFooter';

class Logginn extends React.Component {
	render() {
		return (
			<>
				<PageHeader title="Skriv en ny artikkel" />
				<section id="page_wrapper">
					<h2 className="callout">Story time, bro!</h2>
					<ArticleForm />
				</section>
				<PageFooter />
			</>
		)
	}
}

export default Logginn;