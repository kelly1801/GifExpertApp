import { GIFResponse, Gif} from "../interfaces/types";

export const getGifs = async (category:string): Promise<Gif[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=IU21erYdsZxvkQpTJzLOk7TKGBi3TCMP&q=${category}&limit=6`;
  const resp = await fetch(url);
  const { data }: GIFResponse = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url
  }));

  return gifs;
};
