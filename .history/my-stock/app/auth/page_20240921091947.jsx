import React from "react";

export default function AuthPage() {
  return (
    <div>
      ok
      <LoginCard />
    </div>
  );
}

const LoginCard = () => {
  return(<div className="flex flex-col items-center bg-black w-full">
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>;)
  
};
