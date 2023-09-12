import { Box, Typography, Checkbox } from "@mui/material";
// eslint-disable-next-line 
import { Star, StarBorder } from "@mui/icons-material";
const Email = ({ email }) => {
  return (
    <Box style={{ display: "flex", alignItems: "center",backgroundColor:'#f2f6fc',borderBottom:'4px white solid',marginLeft:'4px',cursor:'pointer' }}>
      <Checkbox />
      <StarBorder style={{ paddingLeft: "10px", paddingRight: "15px" }} />
      <Box style={{ display: "flex", width: "100%" }}>
        <Box style={{ width: "20%" }}>
          {" "}
          <Typography>{email.name}</Typography>
        </Box>
        <Box style={{ width: "80%" }}>
          <Typography>
            {email.subject} {email.body ? "-" : ""}
            {email.body}
          </Typography>
        </Box>
        <Box style={{ width: "10%" ,display:'flex',}}>
            <Typography style={{paddingRight:'5px'}} >{(new window.Date(email.date).getDate())}</Typography>
            <Typography>{(new window.Date(email.date).toLocaleString('default',{month:'long'}))}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Email;
