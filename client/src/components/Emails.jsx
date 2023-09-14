import { useEffect,useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";
// eslint-disable-next-line 
import {Checkbox,Box,List,ListItem} from "@mui/material";
import { DeleteOutlined } from '@mui/icons-material';
import Email from "./Email";
const Emails = () => {
  const { type } = useParams();
  const getEmailService = useApi(API_URLS.getEmailFromType);
  const moveEmailToBin =useApi(API_URLS.moveEmailToBin);
  const { openDrawer } = useOutletContext();
  const[selectedEmails , setSelectedEmails]=useState([]);
  const[refresh,setrefrest]=useState(false);
  useEffect(() => {
   
    getEmailService.call({}, type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type,refresh]);
const selectAllEmails=(e)=>
{
  if (e.target.checked) {
    const emails=getEmailService?.response?.map(email=>email._id);
    setSelectedEmails(emails);
  } else {
    setSelectedEmails([]);
  }
}
const moveToBin=(e)=>
{
  if (type==='bin') {
    
  } else {
    moveEmailToBin.call(selectedEmails);
  }
  setrefrest(prevState => !prevState);
}

  return (
    <Box
      style={openDrawer ? { marginLeft: 250, width: "calc(100%-255)" } : { width: "100%" }}
    >
     <Box style={{padding:'20px 10px 0px 10px',alignItems:'center',display:'flex'}}>
      <Checkbox onChange={(e)=>selectAllEmails(e)}/>
      <DeleteOutlined onClick={(e)=>moveToBin(e)}/>
     </Box>
     <List>
      {
        getEmailService && getEmailService.response?.map(email =>(
        <Email
        key={email._id}
        email={email}
        selectedEmails={selectedEmails}
        setrefrest={setrefrest}
        />))
      }
     </List>
    </Box>
  );
};

export default Emails;
