import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Achetez vos formations à l’unité",
      description:
        "Trouvez la formation qui vous convient dans un catalogue qui couvre des sujets multiples.",
      icon: "🛒",
      btn : "Découvrir le catalogue"
    },
    {
      id: 2,
      title: "Abonnez-vous sans engagement",
      description:
        "Profitez du catalogue complet de Elephorm en illimité sans engagement !",
      icon: "🔄",
      btn : "Découvrir l'abonnement"
    },
  ];

  return (
    <section className="py-8 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Comment se former avec Elephorm ?
        </h2>
        <div className="flex justify-center gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow-lg rounded-md p-4  py-14 flex flex-col  justify-center items-center w-96"
            >
              <div className="text-4xl mr-4 mb-4">{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-5 co-primary">{step.title}</h3>
                <p className=" text-gray-600">{step.description}</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 mt-8 rounded">{step.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
