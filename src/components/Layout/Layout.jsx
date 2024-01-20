// import Header from 'components/Header/Header';
import MainHead from 'components/MainHead/MainHead';
// import Spinner from 'components/Spinner/Spinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <MainHead />
      <Suspense fallback={'<Spinner />'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
