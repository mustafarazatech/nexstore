import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff, FiShoppingBag } from "react-icons/fi";
import { useAuth } from "../context/auth/auth.context";
import MainLayout from "../layouts/MainLayout";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    state: {
      loginForm: { email, password },
    },
    user,
    loading,
    handleLoginChange,
    handleLoginSubmit,
  } = useAuth();
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <MainLayout>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden  px-4">
        {/* Login Card */}
        <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-2xl backdrop-blur-xl">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-3">
              <FiShoppingBag className="text-3xl text-blue-400" />

              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-3xl font-black text-transparent">
                NexStore
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center text-4xl font-black text-white">
            Welcome Back
          </h1>

          <p className="mt-3 text-center text-slate-400">
            Sign in to continue your shopping journey
          </p>

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => handleLoginChange(e)}
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => handleLoginChange(e)}
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
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />

            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              Create Account
            </NavLink>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
