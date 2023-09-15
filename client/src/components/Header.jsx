import { AppBar, Toolbar, Box, InputBase, styled } from "@mui/material";
import {
  Menu as MenuIcon,
  Tune,
  Search,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { gmailLogo } from "../constants/constants";

const StyledAppbar = styled(AppBar)({
  background: "#F6F8FC",
  boxShadow: "none",
});
const OptionWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  "&>svg": {
    marginLeft: "20px",
  },
});
const SearchWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: "80px",
  borderRadius: "30px",
  minWidth: "690px",
  maxWidth: "720px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
  "&:MuiInputBase-input:focus": {
    background: "#FFFFFF",
  },
  "&:hover": {
    background: "#FFFFFF",
  },
});

const Header = ({ toggleDrawer }) => {
  return (
    <StyledAppbar position="static">
      <Toolbar>
        <MenuIcon color="action" onClick={toggleDrawer} />
        <img
          src={gmailLogo}
          alt="Logo"
          style={{ width: "110px", marginLeft: "15px" }}
        />
        <SearchWrapper>
          <Search color="action" />
          <InputBase placeholder="Search mail" sx={{}} />
          <Tune color="action" />
        </SearchWrapper>
        <OptionWrapper>
          <HelpOutlineOutlined color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
        </OptionWrapper>
      </Toolbar>
    </StyledAppbar>
  );
};

export default Header;
