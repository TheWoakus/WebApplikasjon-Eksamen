import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../utils/officeService';

import { useAuthContext } from '../context/AuthProvider.jsx';

const FetchOffices = ({ viewtype, searchFilter }) => {
  const [offices, setOffices] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { isAdmin, isLoggedIn, setUser } = useAuthContext();
  const [groupedOffices, setGroupedOffices] = useState([]);

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

  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  useEffect(() => {
    let localbranch = null;

    if (loaded === false) {
      if (offices !== null) {
        localbranch = groupBy(offices, 'location');
        setOffices(localbranch);
        setGroupedOffices(localbranch);
        setLoaded(true);
      }
    }
  }, [offices]);

  //   console.log(groupedOffice);
  return (
    <>
      {loaded && (
        <section>
          {Object.keys(groupedOffices).map((key) => (
            <section key={key} className="branchLocation">
              <h1 className="branchName">
                {key} (
                <span className="antall">{groupedOffices[key].length}</span>
                <span className="span">kontorer</span>)
              </h1>
              <section className={viewtype}>
                {groupedOffices[key].map((oneOffice, index) => (
                  <Link
                    to={`/kontorer/${oneOffice._id}`}
                    key={oneOffice._id}
                    key={index}
                  >
                    <section className={`office_container_${viewtype}`}>
                      <h3 className="officeNumber">{index + 1}</h3>
                      <h3 className="officeName">{oneOffice.name}</h3>
                      <p className="officeAddress">{`${oneOffice.address} ${
                        index + 1
                      }`}</p>
                      <p className="officePhone">{oneOffice.phone}</p>
                      <p className="officeMail">
                        {`${oneOffice.location}${index + 1}@epost.no`}
                      </p>
                    </section>
                  </Link>
                ))}
              </section>
            </section>
          ))}
        </section>
      )}

      {/* {offices &&
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
          ))} */}
    </>
  );
};

export default FetchOffices;
