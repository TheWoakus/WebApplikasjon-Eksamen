import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../utils/articleService';

import PageHeader from '../components/PageHeader.jsx';
import PageFooter from '../components/PageFooter.jsx';
import { useAuthContext } from '../context/AuthProvider.jsx';

const Fagartikler = () => {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const { isAdmin, isLoggedIn, setUser } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setArticles(data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <PageHeader title="Fagartikler" />
      <section id="page_wrapper">
        {isAdmin && (
          <section>
            <Link to="/nyartikkel/" className="button big bigspace block">
              Ny artikkel
            </Link>
          </section>
        )}

        <section id="articles">
          {articles &&
            articles.map((article) => (
              <Link
                className=""
                to={`/article/${article._id}`}
                key={article.id}
              >
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
