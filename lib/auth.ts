/**
 * Authentication Utilities
 * Handles password hashing and verification using crypto
 */

import crypto from "crypto"

/**
 * Hash password using SHA-256
 * Note: For production, use bcrypt instead
 */
export function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex")
}

/**
 * Verify password against hash
 */
export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash
}

/**
 * Generate JWT-like session token
 */
export function generateSessionToken(): string {
  return crypto.randomBytes(32).toString("hex")
}
