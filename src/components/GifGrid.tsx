interface Props  {
    category: string
};

const GifGrid = ({ category }: Props) => {
  return (
    <>
      <h3> {category}</h3>
      <p>Hello world</p>
    </>
  );
};

export default GifGrid;
