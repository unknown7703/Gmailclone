import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";
const Email = () => {
  const { type } = useParams();
  const getEmailService = useApi(API_URLS.getEmailFromType);
  const { openDrawer } = useOutletContext();
  useEffect(() => {
   
    getEmailService.call({}, type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
  return (
    <div
      style={openDrawer ? { marginLeft: 250, width: "84%" } : { width: "100%" }}
    >
      hello
    </div>
  );
};

export default Email;
