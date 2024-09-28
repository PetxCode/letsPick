import { FC, PropsWithChildren, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useSignUserData, useUser } from "../global/globalState";
import { getGoogleData, signinAccount, singleAccount } from "../api/authAPI";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useUser();

  useEffect(() => {
    getGoogleData()
      .then((res: any) => {
        return res.data.data;
      })
      .then((res) => {
        singleAccount(res).then((res) => {
          setUser(res?.data?.data);
        });
      });
  }, []);

  return (
    <div>{user !== null ? <>{children}</> : <Navigate to="/register" />}</div>
  );
};

export default PrivateRoute;
