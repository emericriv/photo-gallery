import React from "react";
import { useForm } from "@tanstack/react-form";

export const LoginPage = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Tentative de connexion avec :", value);
      // Ajoutez ici la logique d'authentification
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-light">
      <div className="w-full max-w-md bg-dark p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gold text-center mb-6">
          Connexion
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
          className="flex flex-col gap-4"
        >
          {/* Champ Email */}
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? "L'email est requis"
                  : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                  ? "Email invalide"
                  : undefined,
            }}
          >
            {(field) => (
              <div>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-light"
                >
                  Email
                </label>
                <input
                  id={field.name}
                  type="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className="w-full px-4 py-2 mt-1 bg-gray-800 text-light border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red text-sm mt-1">
                    {field.state.meta.errors.join(", ")}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Champ Mot de Passe */}
          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? "Le mot de passe est requis"
                  : value.length < 6
                  ? "Le mot de passe doit contenir au moins 6 caractères"
                  : undefined,
            }}
          >
            {(field) => (
              <div>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-light"
                >
                  Mot de passe
                </label>
                <input
                  id={field.name}
                  type="password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className="w-full px-4 py-2 mt-1 bg-gray-800 text-light border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
                {field.state.meta.errors.length > 0 && (
                  <p className="text-red text-sm mt-1">
                    {field.state.meta.errors.join(", ")}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Bouton de connexion */}
          <button
            type="submit"
            className="w-full bg-gold text-dark font-semibold py-2 rounded hover:bg-gold/80 transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};
