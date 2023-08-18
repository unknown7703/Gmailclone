import { Drawer,styled } from "@mui/material";
import SidebarContent from "./SidebarContent";
const Sidebar = () => {
  return (
   <Drawer
   anchor="left"
   open="true"
   variant="persistent"
   hideBackdrop="true"
   ModalProps={{
    keepMounted:true
   }}
   sx={{
    '& .MuiDrawer-paper':
    {
      marginTop:"64px",
      width:250,
      background:"#F6F8FC",
      borderRight:"none",
      height:"calc(100vh-64px)"

    }
   }}
   >
    <SidebarContent/>
   </Drawer>
  )
};
export default Sidebar;
