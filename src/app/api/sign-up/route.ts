import { supabaseAdmin } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { z } from "zod";

const signUpSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain uppercase letter")
    .regex(/[a-z]/, "Must contain lowercase letter")
    .regex(/[0-9]/, "Must contain number"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = signUpSchema.parse(body);
    const { full_name, email, password } = validatedData;

    // Check if user already exists
    // TODO: This is not the best way to check if a user exists
    const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
    const userExists = existingUsers.users.some((u) => u.email === email);

    if (userExists) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 },
      );
    }

    // Create user with Supabase Auth
    const { data: authData, error: authError } =
      await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: {
          full_name,
        },
      });

    if (authError) {
      console.error("Auth creation error:", authError);
      return NextResponse.json(
        { error: "Failed to create account" },
        { status: 400 },
      );
    }

    // Profile is automatically created by the database trigger

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully",
        user: {
          id: authData.user.id,
          email: authData.user.email,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.message },
        { status: 422 },
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
