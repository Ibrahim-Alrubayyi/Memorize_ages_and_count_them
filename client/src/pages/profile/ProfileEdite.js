import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileEdite = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.isLogin);
  React.useEffect(() => {
    if (user == "false") {
      navigate("/");
    }
  }, []);

  return <div>ProfileEdite</div>;
};

export default ProfileEdite;
