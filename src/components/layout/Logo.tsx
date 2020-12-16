import { Image, useColorMode } from "@chakra-ui/react";

const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Image
        src={colorMode === "light" ? "/avatar-black.png" : "/avatar-white.png"}
        width={35}
        height={35}
        marginRight="2"
        alt=""
      />{" "}
    </>
  );
};

export default Logo;