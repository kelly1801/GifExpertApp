import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";
interface Props {
  category: string;
}
const GifGrid = ({ category }: Props) => {
  const { images, isLoading} = useFetchGifs(category)

  return (
    <>
      <h3> {category}</h3>

      <div className="card-grid">
        {images.map((img) => 
        <GifCard key={img.id} {...img}/>
        
        )}
      </div>
    </>
  );
};

export default GifGrid;
