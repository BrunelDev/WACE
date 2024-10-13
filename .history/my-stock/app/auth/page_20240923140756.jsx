"use client";
import React from "react";
import Image from "next/image";
import { InputComponent } from "@/components/input";
import { Mail, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
export default function AuthPage() {
  return (
    <>
      <header>
        <Header />
      </header>

      <div className="h-[100vh] w-full flex justify-center items-center">
        <LoginCard />
      </div>
    </>
  );
}

const LoginCard = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-[400px] bg-white p-5 rounded-md shadow-sm">
      <div className="w-full flex flex-col items-center mt-6 mb-8">
        <Image src={"/logo.png"} width={50} height={50} alt="" logo />
        <h1 className="text-lg font-bold">Bon retour !</h1>
        <h1 className="text-gray-400">Connectez vous a votre compte</h1>
      </div>

      <form
        className="flex flex-col items-center justify-center w-full space-y-6"
        onSubmit={() => {
          router.push("../");
        }}
      >
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
          <h1 className="text-blue-400 ml-auto w-fit my-2 cursor-pointer">
            Mot de passe oublié ?
          </h1>
        </div>
        <div className="flex space-x-1 pb-6">
          <h1 className="text-gray-400 ">Vous n&apos;avez pas de compte? </h1>
          <h2 className="text-blue-400 cursor-pointer"> Inscrivez Vous</h2>
        </div>
        <button className="bg-[#5570F1] rounded-md text-white px-10 py-2">
          Se connecter
        </button>
      </form>
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-white h-14 pl-5 pt-1">
      <Image src={"/logo.png"} alt={"logo image"} width={40} height={40} />
    </div>
  );
};
