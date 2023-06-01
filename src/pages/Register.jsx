// Componente Register
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Register = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Senhas não coincidem
      return;
    }
    register(email, password);
  };

  return (
    <div className="min-h-screen w-screen bg-primary dark:bg-dark-500 flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center">
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
          <input
            type="password"
            placeholder="Confirme Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-white dark:bg-dark-100 py-2 px-4 rounded-lg"
          />
          <button
            type="submit"
            className="bg-white dark:bg-dark-100 hover:bg-gray-300 hover:scale-110 transition-all py-2 px-4 rounded-lg font-medium"
          >
            Registrar
          </button>
        </form>
        <Link to="/login" className="text-blue-500 hover:underline">
          Já tem uma conta? Faça login aqui.
        </Link>
      </div>
    </div>
  );
};

export default Register;
