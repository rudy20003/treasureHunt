import Image from "next/image";

const Icon = ({ iconName = "", size = 40, height, width }) => {
  if (!iconName) {
    return null;
  }
  return (
    <Image
      src={"/icons/" + iconName + ".png"}
      alt={iconName}
      height={height || size}
      width={width || size}
    />
  );
};

export default Icon;
