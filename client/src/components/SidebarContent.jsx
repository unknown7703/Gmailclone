import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "./config/sidebar.config";
import ComposeModal from "./ComposeModal";
import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import {routes} from "../routes/routes";
const ComposeButton = styled(Button)({
  background: "#C2E7FF",
  marginLeft: "8px",
  borderRadius: "15px",
  padding: "15px 15px",
  color: "black",
  textTransform: "none",
  marginTop: "8px",
  fontWeight: "500",
  "&:hover": {
    background: "#C2E7FF",
    filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2))",
  },
});
const Container = styled(Box)
(
    {
        padding: '8px',
        '& > ul': {
            padding:' 10px 0 0 5px',
            fontSize:' 14px',
            fontWeight: '400',
            cursor: 'pointer',
            '& > a': {
                textDecoration: 'none',
                color:' inherit',
            },
           ' & > a > li > svg': {
                marginRight: '20px',
            },
        }
    }
);
const SidebarContent = () => {
  const [openCompose, setOpenCompose] = useState(false);
  const { type } = useParams();
  const toggleCompose = () => {
    setOpenCompose((current) => !current);
  };

  return (
    <Container>
      
        <ComposeButton varient="contained" onClick={toggleCompose}>
          {" "}
          <CreateOutlined sx={{ marginRight: "15px", color: "black" }} />
          Compose
        </ComposeButton>
      
      
        <List sx={{ fontSize: "15px", marginLeft: "10px", marginRight: "8px" }}>
          {SIDEBAR_DATA.map((data) => (
            <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
              <ListItem
                style={
                  type === data.name.toLowerCase()
                    ? {
                        backgroundColor: "#d3e3fd",
                        borderRadius: "6px 6px 6px 6px",
                      }
                    : {}
                }
              >
                <data.icon sx={{ marginRight: "15px", fontSize: "medium" }} />
                {data.title}
              </ListItem>
            </NavLink>
          ))}
        </List>
      
      <ComposeModal openCompose={openCompose} setOpenCompose={setOpenCompose} />
    </Container>
  );
};

export default SidebarContent;
