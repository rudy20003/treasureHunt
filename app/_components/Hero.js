import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col items-center py-7">
        <h1>Treasure Hunt</h1>
        <div className="hr relative grid content-center my-4">
          <Image
            className="justify-self-center"
            src={"/coin.png"}
            alt="coin"
            height={18}
            width={18}
          />
        </div>
        <h3 className="">
          a blockchain based treasure hunt game for{" "}
          <span
            style={{
              color: "var(--lightText)",
            }}
          >
            geekathon 1.0
          </span>
        </h3>
      </section>
    </>
  );
};

export default Hero;
