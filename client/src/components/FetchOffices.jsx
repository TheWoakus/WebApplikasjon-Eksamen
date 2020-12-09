import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../utils/officeService';

import { useAuthContext } from '../context/AuthProvider.jsx';

const FetchOffices = ({ viewtype, searchFilter }) => {
  const [offices, setOffices] = useState(null);
  const [error, setError] = useState(null);
  const { isAdmin, isLoggedIn, setUser } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        setOffices(data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {offices &&
        offices
          .filter((office) => {
            if (searchFilter == null) {
              return office;
            }
            if (
              office.location.toLowerCase().includes(searchFilter.toLowerCase())
            ) {
              return office;
            }
          })
          .map((office, index) => (
            <Link className="" to={`/kontorer/${office._id}`} key={office._id}>
              <section className={`office_container_${viewtype}`}>
                <h3 className="officeNumber">{index}</h3>
                <h3 className="officeName">{`${office.name} ${index}`}</h3>
                <p className="officeAddress">{`${office.address} ${index}`}</p>
                <p className="officePhone">{office.phone}</p>
                <p className="officeMail">
                  {`${office.location} ${index}@epost.no`}
                </p>
              </section>
            </Link>
          ))}
    </>
  );
};

export default FetchOffices;
