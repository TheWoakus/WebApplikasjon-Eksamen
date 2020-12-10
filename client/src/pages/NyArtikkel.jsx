import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import ArticleForm from '../components/ArticleForm.jsx';
import PageFooter from '../components/PageFooter.jsx';
import { useAuthContext } from '../context/AuthProvider.jsx';

const NyArtikkel = () => {
  const [error, setError] = useState(null);
  const { isAdmin, isLoggedIn, setUser } = useAuthContext();

  return (
    <>
      <PageHeader title="Skriv en ny artikkel" />
      <section id="page_wrapper">
        <h2 className="callout">Story time, bro!</h2>
        <ArticleForm />
      </section>
      <PageFooter />
    </>
  );
};
export default NyArtikkel;
