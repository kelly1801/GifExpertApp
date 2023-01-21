import { GifCard } from "./";
import { useFetchGifs } from "../hooks/useFetchGifs";
interface Props {
  category: string;
}
export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3> {category}</h3>
      {isLoading && <h2>Loading...</h2>}
      <div className="card-grid">
        {images.map((img) => (
          <GifCard key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};


