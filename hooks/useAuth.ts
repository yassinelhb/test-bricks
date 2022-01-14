import {useMemo} from "react";
import {useSelector} from "react-redux";
import {isLoggedIn} from "../store/reducers/authSlice";

export const useAuth = () => {
  const isAuth = useSelector(isLoggedIn);
  return useMemo(() => ({isAuth}), [isAuth]);
};
