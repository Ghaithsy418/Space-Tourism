import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Applayout() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
          <Outlet />
      </main>
    </>
  );
}

export default Applayout;
