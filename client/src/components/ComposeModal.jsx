import {
  Dialog,
  Box,
  styled,
  InputBase,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { Close,DeleteOutline } from "@mui/icons-material";
const SubjectWrapper =styled(Box)(
    {
        display:'flex',
        flexDirection:'column',
        padding:"0px 10px",
        '&>div':{
            borderBottom:'1px solid #F5F5F5',
        }
    }
)
const ComposeModalStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "10px 10px 0px 0px",
};
const Header = styled(Box)({
  display: "flex",
  flexDirection: "row",
  background: "#f2f6fc",
  height: "3%",
  padding: "10px 15px",
  "&>p": {
    fontSize: "small",
    fontWeight: "500",
  },
});

const BottomBar = styled(Box)
(
  {
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    alignItems:'center',

  }
);

const SendButton = styled(Button)
(
  {
   background:'#0B57D0',
   color:'white',
   borderRadius:'30px',
   padding:'0px 5px'
  }
);
const ComposeModal = ({ openCompose }) => {
  return (
    <Dialog open={openCompose} PaperProps={{ sx: ComposeModalStyle }}>
      <Header>
        <Typography width="100%">New message</Typography>
        <Close fontSize="small" />
      </Header>
      <SubjectWrapper>
        <InputBase placeholder="Recipients" sx={{}}/>
        <InputBase placeholder="Subject" />
      </SubjectWrapper>
      <TextField 
      multiline
      rows={22}
      maxRows={22}
      sx={{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}/>
      <BottomBar>
        <SendButton>Send</SendButton>
        <DeleteOutline/>
      </BottomBar>
    </Dialog>
  );
};

export default ComposeModal;