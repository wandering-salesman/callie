import { UserCircleIcon } from "@heroicons/react/24/outline";
import GithubIcon from "@src/assets/icons/github.svg";

const Login = () => {
  const handleGithubAuth = () => {
    console.log("auth");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-2 px-8 py-2 bg-white rounded-md shadow-lg">
        <h1 className="text-lg font-bold m-4">{"Authenticate"}</h1>
        <div className="w-full border-t border-gray-300" />
        <UserCircleIcon className="w-24 m-2" />
        <button
          onClick={handleGithubAuth}
          className="btn mb-8 bg-black text-white border-black"
        >
          <GithubIcon />
          {"Login with GitHub"}
        </button>
      </div>
    </div>
  );
};

export default Login;
