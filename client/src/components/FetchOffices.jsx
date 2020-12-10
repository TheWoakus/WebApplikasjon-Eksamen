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
            <Link
              to={`/kontorer/${office._id}`}
              key={office._id}
              officenumber={index + 1}
            >
              <section className={`office_container_${viewtype}`}>
                <h3 className="officeNumber">{index + 1}</h3>
                <h3 className="officeName">{`${office.name} ${index + 1}`}</h3>
                <p className="officeAddress">{`${office.address} ${
                  index + 1
                }`}</p>
                <p className="officePhone">{office.phone}</p>
                <p className="officeMail">
                  {`${office.location}${index + 1}@epost.no`}
                </p>
              </section>
            </Link>
          ))}
    </>
  );
};

export default FetchOffices;
