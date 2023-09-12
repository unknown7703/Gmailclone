import { useEffect } from "react";
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
  const { openDrawer } = useOutletContext();
  useEffect(() => {
   
    getEmailService.call({}, type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
  return (
    <Box
      style={openDrawer ? { marginLeft: 250, width: "calc(100%-255)" } : { width: "100%" }}
    >
     <Box style={{padding:'20px 10px 0px 10px',alignItems:'center',display:'flex'}}>
      <Checkbox/>
      <DeleteOutlined/>
     </Box>
     <List>
      {
        getEmailService && getEmailService.response?.map(email =>(
        <Email
        key={email._id}
        email={email}
        />))
      }
     </List>
    </Box>
  );
};

export default Emails;
