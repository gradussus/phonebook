import { H1, Link } from './HomePage.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const HomePage = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <>
          <H1>Welcome back to Phonebook</H1>
          <div>
            Welcome back, dear user. All your saved contacts can be found here
            <br />
            <br />
            <Link to={'/contacts'}>YOUR CONTACTS</Link>
          </div>
        </>
      ) : (
        <>
          <H1>Hello, this is Phonebook</H1>
          <div>
            In this application you can save your contacts. To do this, you need
            to
            <br />
            <br />
            <Link to={'/register'}>REGISTER</Link>
            <br />
            <br /> or <br />
            <br />
            <Link to={'/login'}>LOGIN</Link> <br />
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
