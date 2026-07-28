import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { UserStore } from "../context/UserContext";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { users, setUsers, userSession, setUserSession } =
    useContext(UserStore);

  const formData = (data) => {
    const loggedUser = users.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (loggedUser) {
      localStorage.setItem("userSession", JSON.stringify(loggedUser));
      setUserSession(loggedUser);
      reset();
      setTimeout(() => {
        navigate("/");
      }, 1000);
      toast.success(`Welcome ${loggedUser.name} 😘`)
    } else {
      toast.error("Invalid email or password. Please try again !!!");
    }
  };
  return (
    <div className="min-h-screen flex bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      {/* LEFT SECTION */}
      <div className="hidden lg:flex w-3/5 flex-col justify-between p-14">
        {/* Logo */}
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2">
            <i className="ri-eth-fill text-olive-400"></i>
            Sky
            <span className="text-olive-400">Mart</span>
          </h1>
        </div>

        {/* Hero Content */}
        <div className="space-y-6">
          <h5 className="uppercase tracking-[5px] text-zinc-400">
            Welcome Back
          </h5>

          <h2 className="text-6xl font-bold leading-tight">
            Shop the future.
            <br />
            <span className="text-olive-400">Today.</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-xl">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-6">
          <div className="bg-zinc-800/60 backdrop-blur-md rounded-2xl p-6 w-44 border border-zinc-700">
            <h3 className="text-3xl font-bold">20k+</h3>
            <p className="text-zinc-400 mt-2">Products</p>
          </div>

          <div className="bg-zinc-800/60 backdrop-blur-md rounded-2xl p-6 w-44 border border-zinc-700">
            <h3 className="text-3xl font-bold">50k+</h3>
            <p className="text-zinc-400 mt-2">Users</p>
          </div>

          <div className="bg-zinc-800/60 backdrop-blur-md rounded-2xl p-6 w-44 border border-zinc-700">
            <h3 className="text-3xl font-bold flex items-center gap-1">
              4.9
              <i className="ri-star-fill text-yellow-300"></i>
            </h3>
            <p className="text-zinc-400 mt-2">Rating</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex w-full lg:w-2/5 items-center justify-center p-8">
        <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-zinc-700 p-10 shadow-2xl">
          <div className="mb-8">
            <h2 className="text-4xl font-bold">Sign In</h2>

            <p className="text-zinc-400 mt-2">
              Enter your credentials to continue.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(formData)}>
            <div className="relative">
              <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"></i>

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                type="email"
                placeholder="Email Address"
                name="email"
                className="w-full rounded-xl bg-zinc-800 border border-zinc-700 py-4 pl-12 pr-4 outline-none focus:border-olive-400 transition"
              />
            </div>

            <div className="relative">
              <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"></i>

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="w-full rounded-xl bg-zinc-800 border border-zinc-700 py-4 pl-12 pr-12 outline-none focus:border-olive-400 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <i className="ri-eye-line"></i>
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-olive-500 py-4 font-semibold hover:bg-olive-600 transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-zinc-400">
              Don't have an account?
              <NavLink
                to="/register"
                className="ml-2 text-olive-400 hover:underline"
              >
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
