import {Box,Button,styled,List,ListItem} from "@mui/material";
import {CreateOutlined} from "@mui/icons-material";
import { SIDEBAR_DATA } from "./config/sidebar.config";
import ComposeModal from "./ComposeModal";
import {useState} from "react";
const ComposeButton =styled(Button)
(
    {
        background :'#C2E7FF',
        marginLeft:"8px",
        borderRadius :"15px",
        padding:"15px 15px",
        color:'black',
        textTransform: 'none',
        marginTop:'8px',
          fontWeight:'500',
          '&:hover':{
            background:'#C2E7FF',
            filter: 'drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))',
          }
    }
)
const SidebarContent =()=>
{

    const [openCompose,setOpenCompose]=useState(false);
    const toggleCompose =()=>{
      setOpenCompose((current) => !current);
    }

    return (
       <Box>
        <Box>
            <ComposeButton varient="contained" onClick={toggleCompose}> <CreateOutlined sx={{marginRight:"15px",color:'black'}}/>Compose</ComposeButton>
        </Box>
        <Box>
            <List sx={{fontSize:'15px',marginLeft:'10px'}}>
            {
                SIDEBAR_DATA.map(data=>(
                    <ListItem><data.icon sx={{marginRight:'15px',fontSize:'medium'}}/>{data.title}</ListItem>
                ))
            }
            </List>
        </Box>
        <ComposeModal openCompose={openCompose}/>
       </Box>
    )
}

export default SidebarContent;
