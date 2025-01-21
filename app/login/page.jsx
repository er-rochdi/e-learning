'use client';
import { useState, useEffect } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset the error state
    setError('');

    // Basic validation
    if (!username || !password) {
      setError('Veuillez Saisir votre Email et Mot de Passe');
      return;
    }

    // Simple static authentication
    if (username === 'aicha@gmail.com' && password === '123456') {
      document.cookie = 'isAuthenticated=true; path=/';
      window.location.href = '/';
    } else {
      setError('Email ou Mot de Passe Incorrecte.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleLogin}
        className="bg-white  rounded shadow-md w-96 h-[400px] p-12"
      >
        <h2 className="text-2xl font-bold text-center mb-8">Authentification</h2>

        {error && (
          <div className="mb-4 text-red-500 text-sm">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full border px-3 py-2 rounded ${
              error ? 'border-red-500' : ''
            }`}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full border px-3 py-2 rounded ${
              error ? 'border-red-500' : ''
            }`}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 mt-3 rounded hover:bg-blue-600"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
