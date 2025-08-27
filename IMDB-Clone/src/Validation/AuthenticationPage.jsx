import { useNavigate } from "react-router-dom";

export default function SigninPage() {
  const navigate = useNavigate();
  return (
    <div className=" container mx-auto flex flex-col sm:flex-row gap-10 items-center justify-center h-[60vh] md:min-h-[80vh]">
      <div className="flex flex-col gap-4 ">
        <div className="border-l-4 border-amber-300 pl-2">
          <p className="text-xl font-semibold text-amber-300 cursor-pointer">
            Sign in
          </p>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="bg-amber-300 w-full p-2 rounded-2xl font-bold cursor-pointer"
        >
          Create an account
        </button>
        <div className="flex items-center text-gray-200">
          <hr className="flex-grow " />
          <span className="mx-3">or</span>
          <hr className="flex-grow " />
        </div>
        <button
          onClick={() => navigate("/signin")}
          className="border w-full p-2 rounded-2xl font-bold text-gray-200"
        >
          Sign in with Google
        </button>
        <p className="text-gray-300">
          By signing in, you agree to IMDb's Conditions of Use and Privacy
          Policy.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-bold text-amber-300">
          It's so much better when you sign in
        </p>
        <div>
          <p className="text-2xl font-semibold text-gray-200">
            Personalized recommendations
          </p>
          <p className="text-sm text-gray-400">
            Titles tailored to your taste.
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-gray-200">Your Watchlist</p>
          <p className="text-sm text-gray-400 ">
            Track your future views and get reminders.
          </p>
        </div>{" "}
        <div>
          <p className="text-2xl font-semibold text-gray-200">Your ratings</p>
          <p className="text-sm text-gray-400">
            Rate and remember what you watch
          </p>
        </div>{" "}
        <div>
          <p className="text-2xl font-semibold text-gray-200">
            Contribute to IMDb
          </p>
          <p className="text-sm text-gray-400">
            {" "}
            Add data that helps millions of fans.
          </p>
        </div>
      </div>
    </div>
  );
}
