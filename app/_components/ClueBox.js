import Icon from "./icons/Icon";
// import IconArrowLeft from "./icons/IconArrowLeft";
// import IconArrowRight from "./icons/IconArrowRight";

const ClueBox = ({
  clue = "new clue",
  widthPer = 1,
  heightPer = 1,
  showClue,
  setShowClue,
}) => {
  const arrowProps = {
    width: 73 * widthPer,
    height: 27 * heightPer,
  };
  const height = 226;
  const width = 813;
  if (!showClue) return null;
  return (
    <div
      className="fccc relative"
      style={{
        padding: "9%",
        height: heightPer * height,
        width: widthPer * width,
        maxHeight: height,
        maxWidth: width,
        zIndex: 3,
        marginBottom: "30px",
        alignSelf: "flex-end",
        justifySelf: "center",
        boxShadow: "0px 14px 30px 0px #15111F",
        // style={{
        // backgroundColor: "transparent",
        backgroundImage: "url('/clueBox.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // }}
      }}
    >
      {/* <Image
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
      /> */}
      <div style={{ zIndex: 2 }} className="fcc">
        {clue}
        {/* <div
          style={{
            position: "absolute",
            bottom: `calc(50% - ${heightPer * 90}px)`,
            width: "80%",
          }}
          className="flex justify-between gap-x-3"
        >
          <IconArrowLeft {...arrowProps} />
          <IconArrowRight {...arrowProps} />
        </div> */}
        {/* CLOSE BTN */}
        <Icon
          onClick={() => setShowClue(false)}
          iconName="close"
          height={heightPer * 25}
          width={widthPer * 21}
          style={{
            position: "absolute",
            top: `calc(50% - ${heightPer * 60}px)`,
            right: `calc(50% - ${widthPer * 320}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default ClueBox;
