import { GlobalButton } from "..";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { getGoogleData, signWithGoogle } from "../../api/authAPI";
import { useUser } from "../../global/globalState";
import { useEffect } from "react";

const SocialLogin = () => {
  const [user, setUser] = useUser();

  useEffect(() => {
    getGoogleData().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="w-full mt-10 flex flex-col gap-4 ">
      <GlobalButton className="flex justify-center items-center gap-2 text-[#000000e8] border-gray-500 border ">
        <p className="text-xl">
          <FcGoogle />
        </p>
        <div
          className="text-black"
          onClick={() => {
            signWithGoogle().then((res) => {
              console.log(res);
            });
          }}
        >
          Continue with Google
        </div>
      </GlobalButton>
      {/* <GlobalButton className=" flex justify-center items-center gap-2 text-[#000000e8] border-gray-500 border ">
        <p className="text-xl text-blue-800">
          <ImFacebook2 />
        </p>
        <div className="text-black">Continue with Facebook</div>
      </GlobalButton> */}
    </div>
  );
};

export default SocialLogin;
