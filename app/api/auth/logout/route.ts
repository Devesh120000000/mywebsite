/**
 * Logout API Route
 * Clears session cookie
 */

import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST() {
  const cookieStore = await cookies()
  cookieStore.delete("sessionToken")

  return NextResponse.json({ success: true })
}
