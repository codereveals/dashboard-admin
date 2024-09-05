import { redirect } from "next/navigation";

const Home = async () => {
  redirect("/login");
  return (
    <>
      <h1>welcome</h1>
    </>
  );
};

export default Home;
