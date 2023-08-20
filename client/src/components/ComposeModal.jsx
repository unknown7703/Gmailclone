import { Dialog, Box ,styled,InputBase,Button,Typography} from "@mui/material";

const ComposeModalStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "10px 10px 0px 0px",
};
const Header =styled(Box)
(
    {
        background:"#f2f6fc",
        height:'3%',
        padding:'10px 15px',
        '&>p':{
            fontSize:'small',
            fontWeight:'500',
        }
    }
)
const ComposeModal = ({ openCompose }) => {
  return (
    <Dialog open={openCompose} PaperProps={{ sx: ComposeModalStyle }}>
      <Header>
        <Typography>New message</Typography>
      </Header>
    </Dialog>
  );
};

export default ComposeModal;
