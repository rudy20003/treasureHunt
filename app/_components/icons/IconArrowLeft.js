import Icon from "./Icon";

const IconArrowLeft = ({ height, width, onClick }) => {
  return (
    <>
      <Icon
        onClick={onClick}
        iconName="arrowLeft"
        height={height || 27}
        width={width || 73}
      />
    </>
  );
};

export default IconArrowLeft;
