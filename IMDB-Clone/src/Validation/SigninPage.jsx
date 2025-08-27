import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { email, z } from "zod";
import { login } from "../store/authSlice";
const schema = z.object({
  email: z.email(),
  password: z
    .string()
    .regex(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, "Enter your password"),
});
export default function LoginPage() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    try {
      dispatch(login(data));
      navigate("/");
      alert("Login successful");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="container mx-auto md:min-h-[80vh] flex flex-col justify-center items-center gap-10 p-8">
      <div className="w-30">
        <img
          src="src\assets\imdb-logo.svg"
          alt=""
          className="w-full h-full rounded-xl"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="p-2 border border-amber-300 rounded w-96 mx-auto">
        <p className="text-2xl font-semibold mb-6 text-center text-amber-300">
          Sign in
        </p>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium  text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="border rounded border-gray-500 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300 p-1"
            />
            <p className="text-red-500 text-xs pl-4">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium  text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="border rounded border-gray-500 focus:outline-none focus:ring-2 bg-gray-200 focus:ring-offset-2 focus:ring-amber-300 p-1"
            />
            <p className="text-red-500 text-xs pl-4">
              {errors.password?.message}
            </p>
          </div>
          <button
            type="submit"
            className=" w-full bg-amber-300 rounded-2xl text-sm py-2 cursor-pointer"
          >
            Sign in
          </button>
        </form>
        <div>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-sm hover:underline text-gray-200">
              {" "}
              New to IMDb?
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            type="button"
            onClick={() => navigate("/signup")}
            className=" w-full border border-gray-300 bg-gray-200 rounded-2xl text-sm py-2 cursor-pointer"
          >
            Create your IMDb account
          </button>
        </div>
      </div>
    </div>
  );
}
