import Image from "next/image";

const Icon = ({
  iconName = "",
  size = 40,
  height,
  width,
  onClick,
  style,
  title,
  priority = false,
}) => {
  if (!iconName) {
    return null;
  }
  return (
    <button title={title || iconName} onClick={onClick} style={style}>
      <Image
        priority={priority}
        src={"/icons/" + iconName + ".png"}
        alt={iconName}
        height={height || size}
        width={width || size}
      />
    </button>
  );
};

export default Icon;
