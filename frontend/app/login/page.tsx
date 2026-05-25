"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/auth-context";

import {
  GraduationCap,
  Mail,
  Lock,
  ArrowRight,
  User,
} from "lucide-react";

import { motion } from "framer-motion";

export default function LoginPage() {
  const [isSignup, setIsSignup] =
    useState(false);

  const router = useRouter();

  const { login } = useAuth();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const userData = {
      name:
        name ||
        email.split("@")[0],
      email,
    };

    localStorage.setItem(
      "college-user",
      JSON.stringify(userData)
    );

    login(userData);

    router.push("/");
  };

  const handleGoogleLogin = () => {
    const userData = {
      name: "Google User",
      email: "googleuser@gmail.com",
    };

    localStorage.setItem(
      "college-user",
      JSON.stringify(userData)
    );

    login(userData);

    router.push("/");
  };

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-black">
      {/* Glow Background */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-purple-500/30 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/30 blur-3xl" />

      {/* LEFT SECTION */}
      <section className="relative hidden flex-1 overflow-hidden lg:flex">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Logo */}
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-xl">
              <GraduationCap className="h-10 w-10" />
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-6xl font-extrabold leading-tight">
              Discover Your Dream College
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-300">
              Compare colleges, explore
              placements, discover courses
              and make smarter career
              decisions with CollegeLens.
            </p>

            {/* Floating Cards */}
            <div className="mt-14 space-y-5">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="w-fit rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
              >
                ⭐ 4.8 Average Student
                Rating
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="w-fit rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
              >
                🎓 500+ Top Indian Colleges
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
                className="w-fit rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
              >
                🚀 AI Powered College
                Discovery
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="relative flex flex-1 items-center justify-center px-4 py-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/95 p-8 shadow-2xl backdrop-blur-xl"
        >
          {/* Toggle */}
          <div className="mb-8 flex rounded-2xl bg-slate-100 p-1">
            <button
              onClick={() =>
                setIsSignup(false)
              }
              className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                !isSignup
                  ? "bg-black text-white shadow"
                  : "text-slate-500"
              }`}
            >
              Login
            </button>

            <button
              onClick={() =>
                setIsSignup(true)
              }
              className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isSignup
                  ? "bg-black text-white shadow"
                  : "text-slate-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
              {isSignup
                ? "Create Account"
                : "Welcome Back"}
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              {isSignup
                ? "Join CollegeLens today"
                : "Login to continue exploring"}
            </p>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="mb-6 flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white text-sm font-semibold transition hover:bg-slate-100 hover:shadow-md"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="h-5 w-5"
            />

            Continue with Google
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="h-px bg-slate-200" />

            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs text-slate-400">
              OR
            </span>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name */}
            {isSignup && (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) =>
                      setName(
                        e.target.value
                      )
                    }
                    className="h-14 w-full rounded-2xl border border-slate-300 pl-12 pr-4 text-sm outline-none transition focus:border-black focus:ring-4 focus:ring-slate-200"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 pl-12 pr-4 text-sm outline-none transition focus:border-black focus:ring-4 focus:ring-slate-200"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 pl-12 pr-4 text-sm outline-none transition focus:border-black focus:ring-4 focus:ring-slate-200"
                  required
                />
              </div>
            </div>

            {/* Forgot */}
            {!isSignup && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-slate-500 transition hover:text-black"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-black text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {isSignup
                ? "Create Account"
                : "Login"}

              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>

          {/* Forgot Password Card */}
          {!isSignup && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5"
            >
              <h3 className="font-semibold text-slate-900">
                Forgot Password?
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Reset your password
                securely in just a few
                clicks.
              </p>

              <button className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700">
                Reset Password →
              </button>
            </motion.div>
          )}

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-slate-500">
            By continuing, you agree to
            our{" "}
            <Link
              href="#"
              className="font-medium text-black"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="font-medium text-black"
            >
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </section>
    </main>
  );
}