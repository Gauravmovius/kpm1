"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

const initialState: LoginState = {};

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F7F4] px-6">
      <div className="w-full max-w-sm rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C89B5A]">
          UrbanNest Admin
        </span>
        <h1 className="mt-3 text-2xl font-semibold text-[#1C1C1C]">Sign in</h1>
        <p className="mt-1 text-sm text-[#777777]">
          Manage your property, rooms, leads and bookings.
        </p>

        <form action={formAction} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-[#1C1C1C] outline-none focus:border-[#C89B5A] focus:ring-1 focus:ring-[#C89B5A]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#1C1C1C]">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-[#1C1C1C] outline-none focus:border-[#C89B5A] focus:ring-1 focus:ring-[#C89B5A]"
            />
          </div>

          {state.error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-[#1C1C1C] py-2.5 text-sm font-medium text-white transition hover:bg-black disabled:opacity-60"
          >
            {pending ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
