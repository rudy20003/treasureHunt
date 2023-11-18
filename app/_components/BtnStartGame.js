"use client";
import Image from "next/image";
import Link from "next/link";

const BtnStartGame = () => {
  return (
    <>
      <button
        className="hover relative h-[80px] w-[80px]  md:h-[100px] md:w-[100px]"
        style={{ top: "38%", left: "5px" }}
      >
        <Link href={"/game1"}>
          <Image
            src={"/startBtn.png"}
            alt="start game"
            style={{ objectFit: "contain" }}
            fill
          />
        </Link>
      </button>
    </>
  );
};

export default BtnStartGame;
