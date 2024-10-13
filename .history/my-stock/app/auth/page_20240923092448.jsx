import React from "react";
import Image from "next/image";

export default function AuthPage() {
  return (
    <div>
      ok
      <LoginCard />
    </div>
  );
}

const LoginCard = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Image src={"/logo.pnh"} width={50} height={50} alt="" logo />
      <h1 className="text-lg font-bold">Bon retour !</h1>
      <h1 className="text-gray-300">Connectez vous a votre compte</h1>
      <form className="flex flex-col items-center">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
