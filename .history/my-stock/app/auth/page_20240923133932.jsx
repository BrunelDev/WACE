import React from "react";
import Image from "next/image";
import { InputComponent } from "@/components/input";
import { Mail, LockKeyhole } from "lucide-react";
export default function AuthPage() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <LoginCard />
    </div>
  );
}

const LoginCard = () => {
  return (
    <div className="flex flex-col items-center w-[400px] bg-white p-5 rounded-md shadow-sm">
      <Image src={"/logo.png"} width={50} height={50} alt="" logo />
      <h1 className="text-lg font-bold">Bon retour !</h1>
      <h1 className="text-gray-300">Connectez vous a votre compte</h1>
      <form className="flex flex-col items-center justify-center w-full space-y-6">
        <InputComponent
          placeholder={"email"}
          icon={<Mail size={22} />}
          type={"email"}
        />
        <div>
          <InputComponent
            placeholder={"Mot de Passe"}
            icon={<LockKeyhole size={22} />}
            type={"password"}
          />
        </div>
        <button className="bg-blue-500 w-fit rounded-md text-white">
          Se connecter
        </button>
      </form>
    </div>
  );
};
