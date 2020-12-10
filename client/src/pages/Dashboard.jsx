import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageHeader from '../components/PageHeader.jsx';
import PageFooter from '../components/PageFooter.jsx';

import { list as listStats } from '../utils/statsService.js';
import { list as listArticles } from '../utils/articleService';

const StyledTable = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
`;

const StyledTbody = styled.tbody`
  border: 1px solid grey;
  text-align: center;
  & > tr > td {
    border-left: 1px solid grey;
    border-bottom: 1px solid grey;
  }
  & > tr > td:first-child {
    border-left: 0px solid grey;
  }
`;

const StyledThead = styled.thead`
  & > tr > th {
    border-bottom: 2px solid grey;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (stats !== null && articles !== null) {
      stats.forEach((stat) => {
        articles.forEach((article) => {
          if (stat.a_ref === article._id) {
            stat.a_title = article.title;
          }
        });
      });
      setLoaded(true);
    }
  }, [stats, articles]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await listStats();

      if (!data.success) {
        setError('Kunne ikke hente statistikk');
        return;
      }

      setStats(data.data);
    };

    const fetchArticles = async () => {
      const { data } = await listArticles();

      if (!data.success) {
        setError('Kunne ikke hente statistikk');
        return;
      }

      setArticles(data.data);
    };

    fetchData();
    fetchArticles();
  }, []);

  const navigateToArticle = (event) => {
    console.log(event.target.value);
  };

  const temp = 'asd';
  return (
    <>
      <PageHeader title="Dashboard" />
      <section id="page_wrapper">
        {loaded && (
          <StyledTable>
            <StyledThead>
              <tr>
                <th>Artikkel navn</th>
                <th>Antall lesninger</th>
                <th>Antall som har lest</th>
              </tr>
            </StyledThead>
            <StyledTbody>
              {stats.map((statItem) => (
                <tr key={statItem._id}>
                  <td>
                    <StyledLink href={`/article/${statItem.a_ref}`}>
                      {statItem.a_title}
                    </StyledLink>
                  </td>
                  <td>{statItem.viewCount}</td>
                  <td>{statItem.u_refs.length}</td>
                </tr>
              ))}
            </StyledTbody>
          </StyledTable>
        )}
      </section>
      <PageFooter />
    </>
  );
};

export default Dashboard;
