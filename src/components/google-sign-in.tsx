import { signIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa6";
import { redirect } from "next/navigation";

const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
        redirect("/dashboard");
      }}
    >
      <Button className="w-full" variant="outline">
        <FaGoogle />
        Continue with Google
      </Button>
    </form>
  );
};

export { GoogleSignIn };