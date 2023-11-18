import Image from "next/image";
import BtnStartGame from "./BtnStartGame";

const HeroImg = () => {
  return (
    <>
      <section className="relative w-full h-full flex justify-center flex-1">
        <Image
          id="heroImg"
          src={"/startScreen.png"}
          alt="start game"
          style={{ objectFit: "contain" }}
          fill
        />
        <BtnStartGame />
      </section>
    </>
  );
};

export default HeroImg;
