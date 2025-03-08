import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Applayout() {
  return (
    <>
      <NavBar />
      <main>
        <div className="h-[100vh]">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Applayout;
