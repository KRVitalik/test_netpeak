import MainHead from 'components/MainHead/MainHead';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <MainHead />
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
