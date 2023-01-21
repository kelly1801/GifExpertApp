import { Gif } from "../interfaces/types";
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/fetchGifs";
import { GifCard } from "./GifCard";
interface Props {
  category: string;
}
const GifGrid = ({ category }: Props) => {
  const [images, setImages] = useState<Gif[]>([]);
  const fetchGifs = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };
  useEffect(() => {
    fetchGifs();
  }, [category]);

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
