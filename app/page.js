import { redirect } from "next/navigation";
import { auth } from "./api/auth/[...nextauth]/auth";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import HeroImg from "./_components/HeroImg";
const page = async () => {
  const session = await auth();
  console.log(session, "session");
  if (!session) {
    redirect(
      "/auth?error=" + JSON.stringify("You must be logged in to view this page")
    );
  }
  return (
    <>
      <Header />
      <Hero />
      <HeroImg />
    </>
  );
};

export default page;
