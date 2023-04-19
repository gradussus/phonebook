import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import {
  Header,
  Link,
  Footer,
  Wrapper,
  Main,
  SocialLink,
} from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
          <Wrapper>
    <Header>
        <nav>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <Link to={'/login'}>Sign in</Link>
              <Link to={'/register'}>Sign up</Link>
            </>
          )}
        </nav>
      </Header>
      <Main>
        <Suspense>
          <Outlet/>
        </Suspense>
      </Main>
      <Footer>
        © 2023 | All Rights Reserved | Developed by Vitalii Shevchenko <br />
        <SocialLink href="https://github.com/gradussus">Github</SocialLink> |
        <SocialLink href="https://www.linkedin.com/in/vitalii-shevchenko/">
          {' '}
          LinkedIn
        </SocialLink>
      </Footer>
    </Wrapper>
  );
};
