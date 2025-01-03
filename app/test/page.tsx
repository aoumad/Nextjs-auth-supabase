import { Button } from "@/components/ui/button";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import DashboardPage from "./dashboard";

export default async function TestPage() {
  const signOut = async () => {
    "use server";
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
    redirect("/sign-in");
  };
  return (
    <div className="w-full h-screen">
      <DashboardPage />
    <form action={signOut} className="flex h-full w-full items-end justify-center p-8">
      <Button>Sign out</Button>
    </form>
    </div>
  );
}
