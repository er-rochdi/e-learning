import CartFormation from "@/components/CartFormation";
import { formations, videoformations } from "@/constants";
import Image from "next/image";
export default function CourseId(props) {
    const { params } = props;
    const id = params.id;
    const formation = formations.find((formation) => formation.id === parseInt(id));
    const relatedVideos = videoformations.filter((video) => video.formationId === parseInt(id));

    if (!formation) {
        return <p>Formation not found!</p>;
    }

    return (
        <div className="container mx-auto p-4 sm:p-8 border mt-6">
            <div className="mx-auto h-auto sm:h-[250px]  bg-gray-100 p-3 rounded-md flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-4 sm:mb-0">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 co-primary">{formation.title}</h2>
                    <p className="text-base sm:text-lg">{formation.description}</p>
                </div>

                <Image src={formation.image} alt={formation.title} width={400} height={100} className="sm:w-auto" />
                
            </div>
            
            <div className="mb-4 p-4 bg-white shadow-sm border">
            <CartFormation formations={formation} /> 
            </div>
               
        </div>
    );
}
