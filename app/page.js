import CostumCard from "@/components/CostumCard";
import { formations } from "@/constants";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";

export const metadata = {
  title: "E-learning | Autoformations",
  description: "Découvrez une variété d'autoformations pour apprendre à votre rythme.",
};


export default function Home() {
    return (
      <>
      <div className="container mx-auto p-8 my-8">
      <h1 className="text-2xl text-center font-extrabold mb-6 ms-8">Découvrez les formations de BLENDED OFPPT</h1>
      <p className="text-center m-auto w-[80%]">Découvre des formations complètes conçues pour propulser ta carrière vers de nouveaux sommets 🚀 !
      Que tu sois débutant ou professionnel expérimenté, chaque cours est minutieusement élaboré pour répondre à tes besoins spécifiques. Ces formations te fourniront tous les outils 🛠️ et les connaissances essentielles pour exceller dans ton domaine. Ne laisse rien freiner ton ambition, commence dès maintenant à construire ton avenir ! 💡✨</p>
      </div>
      <CostumCard formations={formations} />
      <HowItWorks />
      <FeatureSection />
      </>
      
  );
}
