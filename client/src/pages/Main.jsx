import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {useState} from 'react';

const Main=()=>
{
   const [openDrawer, setOpenDrawer] = useState(true);

   const toggleDrawer = () => {
     
       setOpenDrawer((current) => !current);
   };
 return (<div>
    <Header toggleDrawer={toggleDrawer}/>
    <Sidebar openDrawer={openDrawer} />
    <div>maills</div>
    </div>
 )
}

export default Main;