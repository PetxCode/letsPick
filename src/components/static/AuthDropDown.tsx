import { Link } from "react-router-dom";
import {
  useSignUserData,
  useToggleValue,
  useUser,
} from "../../global/globalState";
import { userHooks } from "../../hooks/userHooks";
import { loggingOut, logOut } from "../../api/authAPI";

const AuthDropDown = () => {
  const { data } = userHooks();
  const [showAuthNav, setShowAuthNav] = useToggleValue();

  const [user, setUser] = useUser();
  const [userData, setUserData] = useSignUserData();

  return (
    <>
      {!user ? (
        <div className="w-[250px] relative bg-white text-[15px] flex flex-col gap-2 rounded-xl shadow-lg">
          <Link to="/register">
            <p
              className="hover:bg-[#f7f7f7] text-black ease-in transition-all cursor-pointer px-6 py-2 mt-6"
              onClick={() => {
                setShowAuthNav(false);
              }}
            >
              Sign up
            </p>
          </Link>
          <Link to="/login">
            <p
              className="hover:bg-[#f7f7f7] ease-in transition-all cursor-pointer px-6 py-2 "
              onClick={() => {
                setShowAuthNav(false);
              }}
            >
              Log in
            </p>
          </Link>

          <hr />
          <p className="text-xs tracking-wider px-6 my-5">PICKASTUDIO</p>
        </div>
      ) : (
        <div className="w-[250px] relative bg-white text-[15px] flex flex-col gap-2 rounded-xl shadow-lg">
          <Link to={`/user/${data?._id}`}>
            <p
              className="hover:bg-[#f7f7f7] text-black ease-in transition-all cursor-pointer px-6 py-2 mt-6"
              onClick={() => {
                setShowAuthNav(false);
              }}
            >
              Account
            </p>
          </Link>

          <p
            className="hover:bg-[#f7f7f7] ease-in transition-all cursor-pointer px-6 py-2 "
            onClick={() => {
              loggingOut();
              setUserData(null);
              setUser(null);
              localStorage.removeItem("mainUser");
              localStorage.removeItem("signUserData");
              loggingOut();
              setShowAuthNav(false);
            }}
          >
            Log Out
          </p>

          <hr />
          <p className="text-xs tracking-wider px-6 my-5">PICKASTUDIO</p>
        </div>
      )}
    </>
  );
};

export default AuthDropDown;
