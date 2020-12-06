import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../utils/articleService';

import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

const Fagartikler = () => {
	const [article, setArticless] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await list();
			if (error) {
				setError(error);
			} else {
				setArticless(data);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<PageHeader title="Fagartikler" />
			<section id="page_wrapper">
				<section id="articles">
					{article && article.map((article) => (
						<Link className="" to={`/article/${article._id}`} key={article.id}>
						<section className="article_container">
							<img className="article_thumbnail" src="" alt="" />
							<section>
								<h2 className="articleTitle">{article.title}</h2>
								<p className="articleCategory">{article.category}</p>
								<p className="articleIngress">{article.ingress}</p>
							</section>
						</section>
						</Link>
					))}
				</section>
				</section>
			<PageFooter />
		</>
	);
};

export default Fagartikler;