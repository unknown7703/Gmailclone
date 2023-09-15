import { Box, Typography, Checkbox } from "@mui/material";
// eslint-disable-next-line
import { Star, StarBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";
const Email = ({ email, selectedEmails, setrefrest,setSelectedEmails}) => {
  const navigate = useNavigate();
  const toggleStarService = useApi(API_URLS.toggleStarredEmail);
  const toggleStar = () => {
    toggleStarService.call({ id: email._id, value: !email.starred });
    setrefrest(prevState => !prevState);
  };

  const selectOneEmail=(e)=>
  {
    if(e.target.checked)
    {const oneEmail=[email._id];
    setSelectedEmails(oneEmail);}
    else{
      setSelectedEmails([]);
    }
  }
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f2f6fc",
        borderBottom: "4px white solid",
        marginLeft: "4px",
        cursor: "pointer",
      }}
    >
      <Checkbox size="sm" onChange={(e)=>selectOneEmail(e)} checked={selectedEmails.includes(email._id)} />
      {email.starred ? (
        <Star
          style={{
            paddingLeft: "10px",
            paddingRight: "15px",
            fontSize: "small",
            color:'#F4B400',
          }}
          onClick={() => toggleStar()}
        />
      ) : (
        <StarBorder
          style={{
            paddingLeft: "10px",
            paddingRight: "15px",
            fontSize: "small",
          }}
          onClick={() => toggleStar()}
        />
      )}
      <Box
        style={{ display: "flex", width: "100%" }}
        onClick={() => navigate(routes.view.path, { state: { email: email } })}
      >
        <Box style={{ width: "20%" }}>
          {" "}
          <Typography style={{ fontSize: "small" }}>{email.name}</Typography>
        </Box>
        <Box style={{ width: "80%" }}>
          <Typography style={{ fontSize: "small" }}>
            {email.subject} {email.body ? "-" : ""}
            {email.body}
          </Typography>
        </Box>
        <Box style={{ width: "10%", display: "flex" }}>
          <Typography style={{ paddingRight: "5px", fontSize: "small" }}>
            {new window.Date(email.date).getDate()}
          </Typography>
          <Typography style={{ fontSize: "small" }}>
            {new window.Date(email.date).toLocaleString("default", {
              month: "long",
            })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Email;
