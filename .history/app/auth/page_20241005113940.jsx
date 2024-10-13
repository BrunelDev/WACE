"use client";
import Image from "next/image";
import { InputComponent } from "@/components/input";
import { Mail, LockKeyhole, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthForm } from "@/lib/context";
import { login, registerClient } from "@/lib/functions";
import { useState } from "react";
export default function AuthPage() {
  const { showLoginForm } = useAuthForm();

  return (
    <>
      <header>
        <Header />
      </header>

      <div className="h-[100vh] w-full flex justify-center items-center">
        {showLoginForm ? <LoginCard /> : <RegisterCard />}
      </div>
    </>
  );
}

const LoginCard = () => {
  const router = useRouter();
  const { setShowLoginForm } = useAuthForm();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);

  return (
    <div className="flex flex-col items-center w-[400px] bg-white p-5 rounded-md shadow-sm">
      <div className="w-full flex flex-col items-center mt-6 mb-8">
        <Image src={"/logo.png"} width={50} height={50} alt="" logo />
        <h1 className="text-lg font-bold">Bon retour !</h1>
        <h1 className="text-gray-400">Connectez vous a votre compte</h1>
      </div>

      <form
        className="flex flex-col items-center justify-center w-full space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          login({ username: email, password: password })
            .then((res) => {
              if (res.error) {
                setError(res.error);
              } else {
                setError(null);
                router.push("http://localhost:3000");
              }
            })
            .catch((error) => {
              console.log(error);
              setError("Une erreur s'est produite lors de la connexion.");
            });
        }}
      >
        <InputComponent
          value={email}
          handleChange={setEmail}
          placeholder={"email"}
          icon={<Mail size={22} />}
          type={"text"}
          required={true}
        />
        <div className="w-full">
          <InputComponent
            value={password}
            handleChange={setPassword}
            placeholder={"Mot de Passe"}
            icon={<LockKeyhole size={22} />}
            type={"password"}
            required={true}
          />
          <h1 className="text-blue-400 ml-auto w-fit my-2 cursor-pointer">
            Mot de passe oublié ?
          </h1>
        </div>
        <div className="flex space-x-1 pb-6">
          <h1 className="text-gray-400 ">Vous n&apos;avez pas de compte ? </h1>
          <h2
            className="text-blue-400 cursor-pointer"
            onClick={() => {
              setShowLoginForm(false);
            }}
          >
            Inscrivez Vous
          </h2>
        </div>

        <button className="bg-[#5570F1] rounded-md text-white px-10 py-2">
          Se connecter
        </button>
      </form>
    </div>
  );
};
const RegisterCard = () => {
  const router = useRouter();
  const { setShowLoginForm } = useAuthForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center w-[400px] bg-white px-5 py-8 rounded-md shadow-sm">
      <div className="w-full flex flex-col items-center mt-6 mb-8">
        <Image src={"/logo.png"} width={50} height={50} alt="" logo />
        <h1 className="text-lg font-bold">Lancez Vous avec WACE</h1>
        <h1 className="text-gray-400">Créer votre compte gratuit</h1>
      </div>

      <form
        className="flex flex-col items-center justify-center w-full space-y-6"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const res = await registerClient({
              name: name,
              email: email,
              password: password,
            });
            console.log("res", res);

            if (res.error) {
              console.log(res.error);
            } else {
              console.log("Client registered successfully");
            }
          } catch (error) {
            console.log("Error registering client", error);
          }
        }}
      >
        <InputComponent
          handleChange={setName}
          placeholder={"Votre Nom complet"}
          icon={<User size={22} />}
          type={"text"}
          required={true}
        />
        <InputComponent
          handleChange={setEmail}
          placeholder={"Votre addresse Email"}
          icon={<Mail size={22} />}
          type={"email"}
          required={true}
        />
        <div className="w-full">
          <InputComponent
            handleChange={setPassword}
            placeholder={"Créez un Mot de Passe Solide"}
            icon={<LockKeyhole size={22} />}
            type={"password"}
            required={true}
          />
        </div>
        <div className="flex space-x-1 pb-6">
          <h1 className="text-gray-400 ">Vous avez déjà un compte ? </h1>
          <h2
            className="text-blue-400 cursor-pointer"
            onClick={() => {
              setShowLoginForm(true);
            }}
          >
            {" "}
            Connectez Vous
          </h2>
        </div>
        <button className="bg-[#5570F1] rounded-md text-white px-10 py-2">
          S&apos;inscrire
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
