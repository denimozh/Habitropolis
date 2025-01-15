export type SignInResponse = {
    error?: string; // Error message (if login fails)
    ok?: boolean;   // Indicates whether the sign-in was successful
    status?: number; // HTTP status code
    url?: string;    // Redirect URL (if applicable)
  };