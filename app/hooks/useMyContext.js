import { useContext } from "react";
import AuthContext from "../contexts/authContext";

export default useMyContext = () => {
  const data = useContext(AuthContext);

  return data.user.isAdmin;
};
