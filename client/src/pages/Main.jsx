import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState, Suspense } from "react";
//import {context} from 'react-router-dom';
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((current) => !current);
  };
  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
      <Suspense fallback={<SuspenseLoader />}>
        <Outlet context={{openDrawer}}/>
      </Suspense>
    </>
  );
};

export default Main;
