import React, { useEffect, useState } from 'react';
import { list } from '../utils/articleService';
import PageHeader from '../components/PageHeader.jsx';
import ArticleForm from '../components/ArticleForm.jsx';
import PageFooter from '../components/PageFooter.jsx';
import { useAuthContext } from '../context/AuthProvider.jsx';

const NyArtikkel = () => {
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
      <PageHeader title="Skriv en ny artikkel" />
      <section id="page_wrapper">
        <h2 className="callout">Story time, bro!</h2>
        <ArticleForm articles={articles} />
      </section>
      <PageFooter />
    </>
  );
};
export default NyArtikkel;
