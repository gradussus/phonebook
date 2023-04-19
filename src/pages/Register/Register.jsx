import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Register now</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name:
          <br />
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Sign Up!</button>
      </form>
    </>
  );
}
