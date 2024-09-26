import GameScreen from "../../_components/GameScreen";
const page = ({ params }) => {
  const { id } = params;
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-wrap w-full h-full justify-center content-end pb-5 mt-5">
        <GameScreen id={id} />
      </div>
      {/* <h2>Game ID: {id}</h2> */}
      {/* <ClueBox /> */}
    </>
  );
};

export default page;
