// lib/actions.ts
'use server'

import { signOut, signIn } from "@/auth";

export async function githubSignIn() {
  await signIn("github");
}

export async function githubSignOut() {
  await signOut({ redirectTo: "/" });
}
