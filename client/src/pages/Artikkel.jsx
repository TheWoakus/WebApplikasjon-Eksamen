import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';

import { useAlert } from 'react-alert';
import { get, remove } from '../utils/articleService';
import { useAuthContext } from '../context/AuthProvider.jsx';

import PageHeader from '../components/PageHeader.jsx';
import PageFooter from '../components/PageFooter.jsx';

const Artikkel = () => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const { isAdmin } = useAuthContext();
  const alert = useAlert();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await get(params.id);
      if (error) {
        setError(error);
      } else {
        setArticle(data);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async () => {
    const { data } = await remove(params.id);

    if (!data.success) {
      alert.show('Greide ikke å slette data', { type: 'error' });
    } else {
      alert.show('Artikkel slettet', { type: 'success' });
      history.push('/fagartikler');
    }
  };

  const fetchArticle = () => {
    if (article === null) {
      const message = <h2>Fetching data</h2>;
      return message;
    }

    const result = { ...article };

    const timestamp = new Date(`${result.createdAt}`);
    const year = timestamp.getFullYear() - 2000;
    const month = (timestamp.getMonth() + 1).toString().padStart(2, '0');
    const day = timestamp.getDate().toString().padStart(2, '0');
    const published = `${day}.${month}.${year}`;

    const output = (
      <>
        <PageHeader title={`${result.title}`} />
        <section id="page_wrapper">
          <section id="article_page">
            <section id="article_meta_header">
              <p className="article_author">Av: {result.author}</p>
              <p className="article_createdAt">{published}</p>
            </section>
            <section id="article_content">
              <p className="article_ingress">{result.ingress}</p>
              <p className="article_content">{result.content}</p>
            </section>
            <section id="article_meta_footer">
              <p className="article_category">Kategori: {result.category}</p>
              <p className="article_slug">Slug: {result.slug}</p>
            </section>
            {isAdmin && (
              <section id="admin_buttons">
                <button onClick={handleDelete} className="delete block">
                  Slett
                </button>

                <NavLink exact to="/registrer/">
                  <button type="submit" className="edit block">
                    Rediger
                  </button>
                </NavLink>
              </section>
            )}
          </section>
        </section>
        <PageFooter />
      </>
    );
    return output;
  };

  return <>{fetchArticle()}</>;
};

export default Artikkel;
