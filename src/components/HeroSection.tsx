import ScrollArrow from "./ScrollArrow";

export const HeroSection = () => {
  return (
    <section className="bg-dark text-light min-h-[90vh] flex flex-col justify-center items-center">
      <div className="relative flex flex-col items-start text-left">
        <h1 className="text-4xl font-bold text-gold">Juliette Leroy</h1>
        <p className="text-blue-gray mt-2 max-w-xl">
          Bienvenue, je suis Juliette Leroy, photographe professionnelle. Vous
          pouvez retrouver ci dessous certaines de mes réalisations. N'hésitez
          pas à me contacter pour toute demande de renseignement ou de devis.
          Pour recommander des images d'un précédent shooting, connectez-vous à
          votre compte.
        </p>
        <button className="mt-6 bg-gold text-dark px-6 py-3 rounded-full cursor-pointer text-lg font-semibold hover:bg-gold/80">
          Voir les photos
        </button>
        {/* Flèche en position absolue */}
        <div className="absolute -right-30 -top-16">
          <ScrollArrow />
        </div>
      </div>
    </section>
  );
};
