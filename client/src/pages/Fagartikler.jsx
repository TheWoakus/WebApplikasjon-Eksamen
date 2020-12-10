import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../utils/articleService.js';
import { download } from '../utils/imageService.js';

import PageHeader from '../components/PageHeader.jsx';
import PageFooter from '../components/PageFooter.jsx';
import { useAuthContext } from '../context/AuthProvider.jsx';
import article from '../../../server/models/article.js';

const Fagartikler = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const { isAdmin, isLoggedIn, setUser } = useAuthContext();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (!data.success) {
        setError(error);
      } else {
        setArticles(data.data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (articles.length !== 0) {
      articles.forEach((articleItem) => {
        if (articleItem.imgSrc !== undefined) {
          articleItem.imgSrc = `${process.env.BASE_URL}/${articleItem.imgSrc}`;
          articleItem.imgSrc = articleItem.imgSrc.replace('/public', '');
        }
      });

      setLoaded(true);
    }
  }, [articles]);

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
            loaded &&
            articles.map((articleDisplayItem) => (
              <Link
                className=""
                to={`/article/${articleDisplayItem._id}`}
                key={articleDisplayItem.id}
              >
                <section className="article_container">
                  <img
                    className="article_thumbnail"
                    src={articleDisplayItem.imgSrc}
                    alt=""
                  />
                  <section>
                    <h2 className="articleTitle">{articleDisplayItem.title}</h2>
                    <p className="articleCategory">
                      {articleDisplayItem.category}
                    </p>
                    <p className="articleIngress">
                      {articleDisplayItem.ingress}
                    </p>
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
