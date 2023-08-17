import { AppBar, Toolbar,styled } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { gmailLogo } from "../constants/constants";

const StyledAppbar =styled(AppBar)(
    {
        background:"#F5F5F5",
        boxShadow:"none"
    }
)
const Header = () => {
  return (
    <StyledAppbar position="static">
      <Toolbar>
        <MenuIcon color="action"/>
        <img src={gmailLogo} alt="Logo" style={{width:"110px",marginLeft:"15px"}}/>
      </Toolbar>
    </StyledAppbar>
  );
};

export default Header;
