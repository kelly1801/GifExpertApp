import { useEffect, useState } from "react";
import { getGifs } from "../helpers/fetchGifs";
import { Gif } from "../interfaces/types";

export const useFetchGifs = (category:string) => {
    const [images, setImages] = useState<Gif[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchGifs = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false)
    };
    useEffect(() => {
      fetchGifs();
    }, []);
  


    return {
        images,
        isLoading
    }
}
