import { NavLink } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiShoppingBag,
} from "react-icons/fi";
import { useAuth } from "../context/auth/auth.context";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const Register = () => {
  const { handleRegisterChange, state, handleRegisterSubmit } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MainLayout>
      <div className="relative flex items-center justify-center p-8">
        <div className="bg-slate-950 relative w-full max-w-md rounded-2xl border border-white/10 p-4 shadow-xl">
          {/* Logo */}
          <div className="mb-1 flex justify-center">
            <div className="flex items-center gap-3">
              <FiShoppingBag className="text-3xl text-blue-400" />

              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-3xl font-black text-transparent">
                NexStore
              </span>
            </div>
          </div>

          {/* Header */}
          <h1 className="text-center text-4xl font-black text-white">
            Create Account
          </h1>

          <p className="mt-3 text-center text-slate-400">
            Join thousands of happy shoppers today.
          </p>

          {/* Form */}
          <form onSubmit={handleRegisterSubmit} className="mt-2 space-y-2">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>

              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={state.registerForm.name}
                  onChange={(e) => handleRegisterChange(e)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={state.registerForm.email}
                  onChange={(e) => handleRegisterChange(e)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={state.registerForm.password}
                  onChange={(e) => handleRegisterChange(e)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-12 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              {/* <p className="mt-2 text-xs text-slate-500">
              Use at least 8 characters with letters, numbers, and symbols.
            </p> */}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800"
              />

              <p className="text-sm text-slate-400">
                I agree to &nbsp;
                <span className="cursor-pointer text-blue-400 hover:text-blue-300">
                  Terms of Service &nbsp;
                </span>
                and &nbsp;
                <span className="cursor-pointer text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            {/* <span className="text-sm text-slate-500">or continue with</span> */}
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
