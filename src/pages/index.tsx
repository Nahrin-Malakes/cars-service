import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import App from "../App";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <>
      {/* <button color="red" onClick={() => void handleSearch()}></button> */}
      <App />
    </>
  );
};

export default Home;
