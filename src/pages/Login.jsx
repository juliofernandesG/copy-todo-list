// Componente Login
import React, { useState } from "react";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithEmail, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = (e) => {
    e.preventDefault();
    loginWithEmail(email, password);
  };

  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  return (
    <div className="min-h-screen w-screen bg-primary dark:bg-dark-500 flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center">
        <img
          src="https://storage.googleapis.com/media.helloumi.com/114209/channels/LP48IQXNWWWI8Z0H7H0RAFDWGUSN0JOF.png"
          className="w-[200px]"
          alt="todoist icon"
        />
        <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white dark:bg-dark-100 py-2 px-4 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white dark:bg-dark-100 py-2 px-4 rounded-lg"
          />
          <button
            type="submit"
            className="bg-white dark:bg-dark-100 hover:bg-gray-300 hover:scale-110 transition-all py-2 px-4 rounded-lg font-medium"
          >
            Entrar
          </button>
        </form>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="bg-white dark:bg-dark-100 hover:bg-gray-300 hover:scale-110 transition-all py-2 px-4 flex items-center gap-2 rounded-lg font-medium"
        >
          <GoogleIcon />
          Entrar com o Google
        </button>
        <p>
          Ainda não tem uma conta?{" "}
          <Link to="/register" className="text-blue-500">
            Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
