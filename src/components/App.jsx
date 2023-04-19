import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './Routes/PrivateRoute';

import { Container } from './App.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'redux/auth/authOperations';
import { PublicRoute } from './Routes/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <PublicRoute component={LoginPage} redirectTo="/contacts" />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute component={RegisterPage} redirectTo="/contacts" />
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          ></Route>
        </Route>
      </Routes>
    </Container>
  );
};
