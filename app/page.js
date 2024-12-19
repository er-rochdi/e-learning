import CostumCard from "@/components/CostumCard";
import { formations } from "@/constants";
import FeatureSection from "@/components/FeatureSection";

export const metadata = {
  title: "E-learning | Autoformations",
  description: "Découvrez une variété d'autoformations pour apprendre à votre rythme.",
};


export default function Home() {
    return (
      <>
      <div className="container mx-auto p-8">
      <h1 className="text-2xl text-center font-extrabold mb-6 ms-8">Découvrez les autoformations de E-learning</h1>
      <p className="text-center m-auto w-[80%]">Découvre des formations complètes conçues pour te propulser au sommet du marketing digital 🚀. Que tu sois débutant ou expérimenté, chaque cours est élaboré pour répondre à tes besoins spécifiques, te fournissant les outils 🛠 et les connaissances pour exceller.</p>
      </div>
      <CostumCard formations={formations} />
      <FeatureSection />
      </>
      
  );
}
