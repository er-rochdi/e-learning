export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
            <section className="text-center">
                <h1 className="text-5xl font-extrabold text-gray-800 sm:text-6xl">404</h1>
                <p className="mt-4 text-xl sm:text-2xl text-gray-600">Page Not Found</p>
                <p className="mt-2 text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
            </section>
            <div className="mt-8">
                <a 
                    href="/" 
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                     Retour à l'accueil
                </a>
            </div>
        </main>
    );
}
