import { formations, videoformations } from "@/constants";
import Image from "next/image";
export default function CourseId({ params }) {
    const id = params.id;
    const formation = formations.find((formation) => formation.id === parseInt(id));
    const relatedVideos = videoformations.filter((video) => video.formationId === parseInt(id));

    if (!formation) {
        return <p>Formation not found!</p>;
    }

    return (
        <div className="container mx-auto p-8">
            <div className="mx-auto h-[200px] mb-6 bg-gray-100 p-3 rounded-md flex justify-between justify-items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4 co-primary ">{formation.title}</h2>
                    <p className="text-lg">{formation.description}</p>
                </div>

                <Image src={formation.image || "/default-image.jpg"} alt={formation.title} width={400} height={300}
                />
            </div>
            <div className="">
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {relatedVideos.length > 0 ? (
                        relatedVideos.map((video) => (
                            <div key={video.id} className="bg-white shadow-md rounded-lg p-6">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={video.video}
                                    title={video.title}
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="flex justify-items-center">
                                 <Image src="/education.svg" alt="education" width={20} height={20} />
                                 <h4 className="font-semibold my-3 px-2">{video.title}</h4>
                                </div>
                                <span className="text-gray-500 mt-7">{video.durition}</span>
                            </div>
                        ))
                    ) : (
                        <p>No related videos found for this formation.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
