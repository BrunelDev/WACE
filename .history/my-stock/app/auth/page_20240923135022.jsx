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
        <div className="w-full">
          <InputComponent
            placeholder={"Mot de Passe"}
            icon={<LockKeyhole size={22} />}
            type={"password"}
          />
          <h1 className="text-blue-400 ml-auto w-fit my-2">
            Mot de passe oublié ?
          </h1>
        </div>
        <span className="flex">
          <h1 className="text-gray-300 ">Vous n&apos;avez pas de compte? </h1>
          <h2 className="text-blue-400"> Inscrivez Vous</h2>
        </span>
        <button className="bg-[#5570F1] rounded-md text-white px-10 py-2">
          Se connecter
        </button>
      </form>
    </div>
  );
};
