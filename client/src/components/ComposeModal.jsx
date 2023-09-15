import { useState } from "react";
import {
  Dialog,
  Box,
  styled,
  InputBase,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";
const SubjectWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0px 10px",
  "&>div": {
    borderBottom: "1px solid #F5F5F5",
  },
});
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

const BottomBar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  alignItems: "center",
});

const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "white",
  borderRadius: "30px",
  padding: "5px 15px",
  textTransform: "none",
  fontWeight: "500",
  width: "60px",
  "&:hover": {
    background: "#0B57D0",
    filter: "drop-shadow(0 0.2rem 0.25rem rgba(30, 144, 225, 0.5))",
  },
});

const ComposeModal = ({ openCompose, setOpenCompose }) => {
  const sentEmailServices = useApi(API_URLS.saveSentEmail);
  const saveDraftService = useApi(API_URLS.saveDraftEmail);
  const config = {
    Host: "smtp.elasticemail.com",
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: "2525",
  };
  const handleClose = (e) => {
    e.preventDefault();
    const payload = {
      to: data.to,
      from: "blackpage9876@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: "",
      name: "Gmail Clone",
      starred: false,
      type: "draft",
    };
    saveDraftService.call(payload);
    if (!saveDraftService.error) {
      setOpenCompose(false);
      setData({});
    }
  };

  const sendMail = (e) => {
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "blackpage9876@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }
    const payload = {
      to: data.to,
      from: "blackpage9876@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: "",
      name: "Gmail Clone",
      starred: false,
      type: "sent",
    };
    sentEmailServices.call(payload);
    if (!sentEmailServices.error) {
      setOpenCompose(false);
      setData({});
    }

    setOpenCompose(false);
  };
  const [data, setData] = useState({});
  const valueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Dialog open={openCompose} PaperProps={{ sx: ComposeModalStyle }}>
      <Header>
        <Typography width="100%">New message</Typography>
        <Close
          fontSize="small"
          onClick={(e) => handleClose(e)}
          sx={{
            "&:hover": { filter: "drop-shadow(0 3px 1px rgba(0, 0, 0, 0.3))" },
          }}
        />
      </Header>
      <SubjectWrapper>
        <InputBase
          placeholder="Recipients"
          name="to"
          onChange={(e) => valueChange(e)}
        />
        <InputBase
          placeholder="Subject"
          name="subject"
          onChange={(e) => valueChange(e)}
        />
      </SubjectWrapper>
      <TextField
        name="body"
        onChange={(e) => valueChange(e)}
        multiline
        rows={22}
        maxRows={22}
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
      />
      <BottomBar>
        <SendButton onClick={sendMail}>Send</SendButton>
        <DeleteOutline />
      </BottomBar>
    </Dialog>
  );
};

export default ComposeModal;
