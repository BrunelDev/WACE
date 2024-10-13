import React from "react";
import Image from "next/image";
import { InputComponent } from "@/components/input";
import { Mail } from "lucide-react";
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
      <Image src={"/logo.png"} width={50} height={50} alt="" logo />
      <h1 className="text-lg font-bold">Bon retour !</h1>
      <h1 className="text-gray-300">Connectez vous a votre compte</h1>
      <form className="flex flex-col items-center">
        <InputComponent placeholder={"email"} icon={<Mail size={22} />} />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
