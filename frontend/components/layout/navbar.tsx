"use client";

import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { motion } from "framer-motion";

import {
  GraduationCap,
  Bookmark,
  LayoutDashboard,
  GitCompare,
} from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();

  const linkBase =
    "relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 overflow-hidden border-b border-white/20 bg-gradient-to-r from-indigo-50 via-white to-blue-50 backdrop-blur-xl"
    >
      {/* colorful moving background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 h-60 w-60 animate-pulse rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute top-10 right-1/4 h-60 w-60 animate-pulse rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-40 w-40 animate-pulse rounded-full bg-violet-300/20 blur-3xl" />
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 text-white shadow-lg"
          >
            <GraduationCap className="h-6 w-6" />
          </motion.div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
              CollegeLens
            </h1>
            <p className="text-xs text-slate-500">
              College Discovery Platform
            </p>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-2 md:flex">

          <Link
            href="/"
            className={`${linkBase} text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-sm`}
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>

          <Link
            href="/compare"
            className={`${linkBase} text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm`}
          >
            <GitCompare className="h-4 w-4" />
            Compare
          </Link>

          <Link
            href="/saved"
            className={`${linkBase} text-slate-700 hover:bg-violet-50 hover:text-violet-700 hover:shadow-sm`}
          >
            <Bookmark className="h-4 w-4" />
            Saved
          </Link>

          {/* Auth */}
          {user ? (
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-white/40">
                Hi, {user.name}
              </div>

              <button
                onClick={logout}
                className="rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:shadow-xl transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:shadow-xl transition"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile */}
        <button className="rounded-xl border border-indigo-200 bg-white/70 px-4 py-2 text-sm font-medium text-indigo-700 md:hidden">
          Menu
        </button>
      </div>
    </motion.header>
  );
}