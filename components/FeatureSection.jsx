import React from 'react'

const FeatureSection = () => {
    const features = [
        { id: 1, title: "Support technique à votre écoute", icon: "💬" },
        { id: 2, title: "Un paiement 100% sécurisé", icon: "🔒" },
        { id: 3, title: "Formations accessibles 24h/24", icon: "⏰" },
        { id: 4, title: "Accès sur tous vos appareils", icon: "📱" },
    ];

    return (
        <section className="">
            <div className="mx-auto">
                <div className="text-center py-16 bg-gray-100">
                    <h2 className="text-2xl font-bold text-center mb-6">Besoin d’aide ? Contactez notre support technique !</h2>
                    <p className="text-center m-auto w-[80%]">Notre équipe de support technique est disponible 24h/24 pour répondre à toutes vos questions et vous aider à résoudre vos problèmes.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-primary text-white py-10">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="rounded-lg p-6 text-center flex flex-col items-center"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h4 className=" text-base font-semibold">{feature.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeatureSection