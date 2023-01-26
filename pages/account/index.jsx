import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Layout from "../../layout/Layout";

const AccountSettings = () => {
  const { data: session } = useSession();

  if (session) {
    // if loggged in
    return (
      <Layout>
        <section>
          <div className="flex items-center justify-center w-full my-24">
            <div className="w-[400px] border border-gray-300 text-center p-4">
              <h2 className="capitalize">
                welcome,{" "}
                <span className="text-blue-400 ">{session.user.name}</span>
              </h2>
              <p> You're Signed in as {session.user.email}</p>
              <div className="flex items-center justify-center my-3">
                <Image
                  src={session.user.image}
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full"
                  alt="user image"
                />
              </div>
              <div className="my-5 flex items-center gap-x-5 justify-center">
                <button
                  className="w-32 bg-gray-700 text-white rounded-md hover:bg-red-600 p-2 capitalize"
                  onClick={() => signOut()}
                >
                  Sign out
                </button>
                <Link href={`/cart`}>
                  <button className="w-32 bg-red-600 text-white rounded-md hover:bg-red-400 p-2 capitalize">
                    back to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
  return (
    <div className="bg-black w-full h-screen text-white">
      <div className="p-4 flex items-center justify-center">
        <Link href={`/`}>
          <h4 className="hover:text-green-500">or continue without signing in</h4>
        </Link>
      </div>
      <div className="flex items-center justify-center ">
        <div className="w-[400px] my-20 border border-gray-800 p-4">
          <h4 className="text-center mb-5 uppercase text-2xl">login</h4>
          <p className="text-center text-sm capitalize">
            choose account to login from
          </p>

          <div className="flex items-center justify-center my-10 flex-col gap-y-5">
            <div>
              <button
                onClick={() => signIn()}
                className="w-52 bg-gray-900 text-white rounded-md hover:bg-slate-600 p-2 capitalize flex items-center gap-x-2"
              >
                <FaGithub />
                sign in with <span className="font-semibold">github</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => signIn()}
                className="w-52 bg-gray-900 text-white rounded-md hover:bg-red-600 p-2 capitalize flex items-center gap-x-2"
              >
                <FaGoogle />
                sign in with <span className="font-semibold">google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
