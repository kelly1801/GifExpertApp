import { Gif } from "../interfaces/types";


export const GifCard = ({title, url}:Gif) => {

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
