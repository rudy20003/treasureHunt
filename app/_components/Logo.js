import Image from "next/image";
import Link from "next/link";

const Logo = ({ size = 55 }) => {
  return (
    <>
      <Link href={"/"} className="hover">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={size}
          height={size}
          priority={true}
        />
      </Link>
    </>
  );
};

export default Logo;
