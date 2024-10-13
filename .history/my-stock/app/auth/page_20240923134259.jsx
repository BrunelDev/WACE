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
          <h1>
            <a href="/forgot-password" className="text-gray-400">
              Mot de passe oublié?
            </a>{" "}
            ou{" "}
            <a href="/signup" className="text-blue-400">
              Créer un compte
            </a>{" "}
            pour vous inscrire.{" "}
            <a href="/terms" className="text-blue-400">
              Conditions d'utilisation
            </a>{" "}
            et{" "}
            <a href="/privacy" className="text-blue-400">
              Politique de confidentialité
            </a>{" "}
            de WACE.{" "}
            <a href="/help" className="text-blue-400">
              Aide
            </a>{" "}
            pour vous renseigner.{" "}
            <a href="/about" className="text-blue-400"></a>
          </h1>
        </div>
        <button className="bg-[#5570F1] rounded-md text-white px-10 py-2">
          Se connecter
        </button>
      </form>
    </div>
  );
};
