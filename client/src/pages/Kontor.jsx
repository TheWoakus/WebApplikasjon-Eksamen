import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { get } from '../utils/officeService';

import PageHeader from '../components/PageHeader.jsx';
import PageFooter from '../components/PageFooter.jsx';
import Employee from '../components/Employee.jsx';

const Kontor = () => {
  const [office, setOffice] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await get(params.id);
      if (error) {
        setError(error);
      } else {
        setOffice(data);
      }
    };
    fetchData();
  }, []);

  const fetchOffice = () => {
    if (office === null) {
      const message = <h2>Fetching data</h2>;
      return message;
    }

    const result = { ...office };

    const output = (
      <>
        <PageHeader title={`${result.name}`} />
        <section id="page_wrapper">
          <section id="office_header">
            <h2>Velkommen til {result.name}</h2>
            <p>Ingressen: {result.ingress}</p>
          </section>
          <section id="office_employees">
            <h2>Våre ansatte</h2>
            <section className="employee_profile">
              <Employee employeeList={result.employees} />
            </section>
          </section>
          <section id="office_meta_footer">
            <PageHeader title={`Kontakt oss på ${result.phone}`} />
          </section>
        </section>
        <PageFooter />
      </>
    );
    return output;
  };

  return <>{fetchOffice()}</>;
};

export default Kontor;
