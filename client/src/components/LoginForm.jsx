import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PasswordViewer from '../components/PasswordViewer.jsx';

import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 300px;
`;

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      email,
      password,
    };

    const { data } = await login(credentials);

    if (!data.success) {
      setError(data.message);
      alert.show('Feil brukernavn eller passord', { type: 'error' });
    } else {
      const { user } = data;
      setUser({ ...user });

      setSuccess(true);
      alert.show('Du har nå logget på!', { type: 'success' });

      history.push('/');
    }
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <fieldset>
          <label className="formLabel" htmlFor="email">
            E-post&#58;
            <span id="content_error">OBS!! Sjekk at denne er riktig</span>
          </label>
          <input
            type="text"
            name="email"
            className="input"
            placeholder="Skriv inn din e-post"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="formLabel" htmlFor="password">
            Passord&#58;
            <span id="content_error">OBS!! Sjekk at denne er riktig</span>
          </label>
          <input
            type="password"
						name="password"
						id="password"
            className="input"
            placeholder="Skriv inn ditt passord"
            onChange={(e) => setPassword(e.target.value)}
          />
					<PasswordViewer />
          <button type="submit" className="button centered big">
            Logg inn
          </button>
        </fieldset>
      </StyledForm>
    </>
  );
};

export default LoginForm;
