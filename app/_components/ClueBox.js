import Image from "next/image";
import IconArrowLeft from "./icons/IconArrowLeft";
import IconArrowRight from "./icons/IconArrowRight";

const ClueBox = ({ clue = "new clue" }) => {
  return (
    <div
      className="fccc relative"
      style={{
        height: "inherit",
        width: "inherit",
        // style={{
        // backgroundColor: "transparent",
        // backgroundImage: "url('/clueBox.png')",
        // backgroundSize: "cover",
        // backgroundPosition: "top",
        // backgroundRepeat: "no-repeat",
        // }}
      }}
    >
      <Image
        style={{
          zIndex: 1,
          position: "absolute",
          // alignSelf: "flex-start",
          // justifySelf: "flex-start",
        }}
        src={"/clueBox.png"}
        alt="clueBox"
        height={277}
        width={998}
      />
      <div style={{ zIndex: 2 }}>
        {clue}
        <div
          style={{ position: "relative", bottom: 0 }}
          className="flex gap-x-3"
        >
          {/* arrow icons */}
          <IconArrowLeft />
          <IconArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ClueBox;
