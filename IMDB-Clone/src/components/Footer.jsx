import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t-2 border-amber-300 ">
      <div className="flex flex-col gap-2 container mx-auto  py-8  justify-center items-center">
        <ul className=" flex  gap-8 text-sm text-blue-500 ">
          <li className=" hover:underline cursor-pointer"> Help </li>
          <li className=" hover:underline cursor-pointer">
            {" "}
            Conditions of Use{" "}
          </li>
          <li className=" hover:underline cursor-pointer"> Privacy Notice </li>
        </ul>
        <p className="text-sm text-gray-200">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
}
