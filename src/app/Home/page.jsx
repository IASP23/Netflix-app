"use client";
import { Input } from "@/components/input";
import Logo from "@/components/logo";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function HomePage() {
  const [variant, useVariant] = useState(false);

  const toogle = () => {
    useVariant(!variant);
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-12 py-5">
          <Logo />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 mt-2 lg:w-2/5 lg:max-w-sm rounded-2xl w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant ? "Login" : "Register"}{" "}
            </h2>
            <div className="flex flex-col gap-4">
              {!variant && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={() => signIn("google")}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant ? "Login" : "Sign-up"}
            </button>
            <p className="text-neutral-500 mt-10">
              First time using Netflix ?
              <span
                onClick={toogle}
                className="text-white ml-3 hover:underline cursor-pointer">
                {variant ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
