import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Technology from "./Components/Technology";
import Moon from "./Components/Moon";
import Mars from "./Components/Mars";
import Europa from "./Components/Europa";
import Titan from "./Components/Titan";
import Crew01 from "./Components/Crew01";
import Crew02 from "./Components/Crew02";
import Crew03 from "./Components/Crew03";
import Crew04 from "./Components/Crew04";
import Technology01 from "./Components/Technology01";
import Technology02 from "./Components/Technology02";
import Technology03 from "./Components/Technology03";
import { AnimatePresence } from "motion/react";
import { lazy, Suspense } from "react";
import Message from "./Components/Message";

const AppLayout = lazy(() => import("./Components/Applayout"));
const Destination = lazy(() => import("./Components/Destination"));
const Crew = lazy(() => import("./Components/Crew"));
const HomePage = lazy(() => import("./Components/HomePage"));

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Message message="Loading..." />}>
        <Routes location={location} key={location.key}>
          <Route path="*" element={<Message message="Page Not Found :(" />} />
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="destination" element={<Destination />}>
              <Route index element={<Navigate replace to="moon" />} />
              <Route path="moon" element={<Moon />} />
              <Route path="mars" element={<Mars />} />
              <Route path="eruopa" element={<Europa />} />
              <Route path="titan" element={<Titan />} />
            </Route>
            <Route path="crew" element={<Crew />}>
              <Route index element={<Navigate replace to="crew1" />} />
              <Route path="crew1" element={<Crew01 />} />
              <Route path="crew2" element={<Crew02 />} />
              <Route path="crew3" element={<Crew03 />} />
              <Route path="crew4" element={<Crew04 />} />
            </Route>
            <Route path="technology" element={<Technology />}>
              <Route index element={<Navigate replace to="tech1" />} />
              <Route path="tech1" element={<Technology01 />} />
              <Route path="tech2" element={<Technology02 />} />
              <Route path="tech3" element={<Technology03 />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
