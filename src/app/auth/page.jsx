"use client";
import { Input } from "@/components/input";
import { useState } from "react";

export default function AuthPage() {
  const [variant, useVariant] = useState(false);

  const toogle = () => {
    useVariant(!variant);
  };

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 mt-2 lg:w-2/5 lg:max-w-sm rounded-2xl w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant ? "Login" : "Register"}{" "}
            </h2>
            <div className="flex flex-col gap-4">
              {!variant && <Input />}
              <Input />
              <Input />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              Login
            </button>
            <p className="text-neutral-500 mt-10">
              First time using Netflix ?
              <span
                onClick={toogle}
                className="text-white ml-3 hover:underline cursor-pointer">
                {variant ? "Create an accounts" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
