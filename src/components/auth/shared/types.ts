export type AuthFormState = {
  error?: string;
  success?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "password", string>>;
};
