import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../store/authSlice";

const schema = z
  .object({
    name: z.string().nonempty("Enter your name"),
    email: z.email("Enter a valid email address"),
    password: z
      .string()
      .regex(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, "Enter your password"),
    reEnterPassword: z.string(),
  })
  .refine((data) => data.password === data.reEnterPassword, {
    message: "Password must match",
    path: ["reEnterPassword"],
  });
export default function SignupPage() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      reEnterPassword: "",
    },
    resolver: zodResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitSuccessful } = formState;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    try {
      dispatch(signup(data));
      alert("Account created successfully");
      navigate("/signin");
    } catch (err) {
      alert(err.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);

  return (
    <div className="container mx-auto md:h-[80vh] h-[60vh] flex flex-col items-center gap-10 py-8">
      {" "}
      <div className="w-30">
        <img
          src="src\assets\imdb-logo.svg"
          alt=""
          className="w-full h-full rounded-xl"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="p-2 border border-amber-300 rounded w-96 ">
        {" "}
        <p className="text-2xl font-semibold mb-6 text-amber-300 text-center">
          Create account
        </p>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-4 "
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium  text-gray-200">
              Your name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="border rounded border-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300  bg-gray-200  p-1"
            />
            <p className="text-red-500 text-xs pl-4">{errors.name?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium  text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="border rounded border-gray-500 focus:outline-none focus:ring-2  bg-gray-200 focus:ring-offset-2 focus:ring-amber-300 p-1"
            />
            <p className="text-red-500 text-xs pl-4">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium  text-gray-200">
              Password{" "}
            </label>
            <div
              className="border rounded border-gray-500 bg-gray-200 
    focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-300 
    p-1 flex justify-between pr-2"
            >
              {" "}
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password")}
                className=" flex-1 outline-none"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <p className="text-red-500 text-xs pl-4">
              {errors.password?.message}
            </p>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="reEnterPassword"
              className="font-medium  text-gray-200"
            >
              Re-enter password{" "}
            </label>
            <div
              className="border rounded border-gray-500 bg-gray-200 
    focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-300 
    p-1 flex justify-between pr-2"
            >
              <input
                type={showRepassword ? "text" : "password"}
                id="reEnterPassword"
                {...register("reEnterPassword")}
                className="flex-1 outline-none"
              />
              <button
                onClick={() => setShowRepassword(!showRepassword)}
                type="button"
                className="cursor-pointer"
              >
                {showRepassword ? "Hide" : "Show"}
              </button>
            </div>

            <p className="text-red-500 text-xs pl-4">
              {errors.reEnterPassword?.message}
            </p>
          </div>
          <button
            type="submit"
            className=" w-full bg-amber-300 rounded-2xl text-sm py-2 cursor-pointer text-black"
          >
            Create your IMDb account
          </button>
        </form>
        <div className="border-t-2 border-gray-300 mt-8 pt-6 text-gray-200">
          <p className="text-smb">
            Already have an account?{" "}
            <Link className="hover:underline text-blue-600" to={"/signin"}>
              Login{" "}
            </Link>
            &gt;
          </p>
        </div>
      </div>
    </div>
  );
}
