import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { UserStore } from "../context/UserContext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { users, setUsers, userSession, setUserSession } =
    useContext(UserStore);
  const onError = (errors) => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message);
    });
  };
  const formData = (data) => {
    //console.log(data);
    const newUser = {
      id: nanoid(),
      name: data.name,
      email: data.email,
      password: data.password,
    };
    if (users.find((user) => user.email === newUser.email)) {
      //alert("User already exists with this email")
      toast.warn("User already exists with this email");
      return;
    }
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    setUsers([...users, newUser]);
    localStorage.setItem("userSession", JSON.stringify(newUser));
    setUserSession(newUser);
    //alert("Registration successful");
    toast.success("Registration Successful 😊");
    navigate("/");
    reset();
  };
  return (
    <div className="min-h-screen flex bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      {/* Left Side */}
      <div className="hidden lg:flex w-3/5 flex-col justify-between p-14">
        {/* Logo */}
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2">
            <i className="ri-eth-fill text-olive-400"></i>
            Sky
            <span className="text-olive-400">Mart</span>
          </h1>
        </div>

        {/* Hero */}
        <div className="space-y-6">
          <h5 className="uppercase tracking-[5px] text-zinc-400">
            Join SkyMart
          </h5>

          <h2 className="text-6xl font-bold leading-tight">
            Create your
            <br />
            <span className="text-olive-400">shopping journey.</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-xl">
            Discover thousands of products, exclusive deals, and seamless
            shopping—all in one place.
          </p>
        </div>

        {/* Benefits */}
        <div className="flex gap-6">
          <div className="bg-zinc-800/60 backdrop-blur-md rounded-2xl p-6 w-44 border border-zinc-700">
            <i className="ri-truck-line text-3xl text-olive-400"></i>
            <p className="mt-4 font-semibold">Fast Delivery</p>
          </div>

          <div className="bg-zinc-800/60 backdrop-blur-md rounded-2xl p-6 w-44 border border-zinc-700">
            <i className="ri-shield-check-line text-3xl text-olive-400"></i>
            <p className="mt-4 font-semibold">Secure Payments</p>
          </div>

          <div className="bg-zinc-800/60 backdrop-blur-md rounded-2xl p-6 w-44 border border-zinc-700">
            <i className="ri-customer-service-2-line text-3xl text-olive-400"></i>
            <p className="mt-4 font-semibold">24/7 Support</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full lg:w-2/5 items-center justify-center p-8">
        <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-zinc-700 p-10 shadow-2xl">
          <div className="mb-8">
            <h2 className="text-4xl font-bold">Create Account</h2>

            <p className="text-zinc-400 mt-2">
              Join SkyMart today and start shopping.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit(formData, onError)}
          >
            {/* Name */}
            <div className="relative">
              <i className="ri-user-line absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"></i>

              <input
                {...register("name", { required: "Name is required" })}
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl bg-zinc-800 border border-zinc-700 py-4 pl-12 pr-4 outline-none focus:border-olive-400 transition"
              />
            </div>

            {/* Email */}
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
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-zinc-800 border border-zinc-700 py-4 pl-12 pr-4 outline-none focus:border-olive-400 transition"
              />
            </div>

            {/* Password */}
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
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-xl bg-zinc-800 border border-zinc-700 py-4 pl-12 pr-12 outline-none focus:border-olive-400 transition"
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <i className="ri-eye-line"></i>
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <i className="ri-lock-password-line absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"></i>

              <input
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full rounded-xl bg-zinc-800 border border-zinc-700 py-4 pl-12 pr-12 outline-none focus:border-olive-400 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-olive-500 py-4 font-semibold hover:bg-olive-600 transition duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-zinc-400">
              Already have an account?
              <NavLink
                to="/login"
                className="ml-2 text-olive-400 hover:underline"
              >
                Log In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
