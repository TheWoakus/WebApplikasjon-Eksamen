import React, { useState } from 'react';
import { useAlert } from 'react-alert';
// import { register } from '../utils/authService.jsx';

const SignupForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [verifyPassword, setVerifyPassword] = useState(null);

  const alert = useAlert();

  const onSubmit = async () => {
    // eslint-disable-next-line no-restricted-globals, no-undef
    event.preventDefault();

    if (password !== verifyPassword) {
      alert.show('Passord samvsarer ikke', { type: 'error' });
      return;
    }

    const credentials = {
      name,
      email,
      username,
      password,
    };

    const { data } = await register(credentials);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <label className="registerLabel" htmlFor="name">
            Navn&#58;
            <span id="name_error">OBS!! Sjekk at denne er riktig</span>
          </label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Vennligst oppgi ditt navn"
            onChange={(e) => setName(e.target.value)}
          />

          <label className="registerLabel" htmlFor="mail">
            Epost&#58;
            <span id="mail_error">OBS!! Sjekk at denne er riktig</span>
          </label>
          <input
            type="text"
            name="mail"
            className="input"
            placeholder="Vennligst oppgi din epost"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="registerLabel" htmlFor="username">
            Brukernavn&#58;
            <span id="username_error">OBS!! Sjekk at denne er riktig</span>
          </label>
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Hva ønsker du å ha som ditt brukernavn?"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="registerLabel" htmlFor="password">
            Passord&#58;
            <span id="password_error">OBS!! Sjekk at denne er riktig</span>
          </label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Skriv inn ditt ønskede passord"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="registerLabel" htmlFor="verifypassword">
            Bekreft passord&#58;
            <span id="verifypassword_error">
              OBS!! Sjekk at denne er riktig
            </span>
          </label>
          <input
            type="password"
            name="verifypassword"
            className="input"
            placeholder="Bekreft ditt passord"
            onChange={(e) => setVerifyPassword(e.target.value)}
          />
          <button type="submit" className="button centered big block">
            Register
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default SignupForm;
