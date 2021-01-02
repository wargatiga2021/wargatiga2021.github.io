import { Image, useColorMode } from "@chakra-ui/react";

const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Image
        src={colorMode === "light" ? "/avatar-dark.png" : "/avatar-light.png"}
        marginRight="2"
        width={{base: "30px", sm: "35px"}}
        height={{base: "30px", sm: "35px"}}
        alt=""
      />{" "}
    </>
  );
};

export default Logo;