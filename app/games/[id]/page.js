import ClueBox from "../../_components/ClueBox";
const page = ({ params }) => {
  const { id } = params;
  return (
    <>
      <h1>Game Page</h1>
      <h2>Game ID: {id}</h2>
      <ClueBox />
    </>
  );
};

export default page;
