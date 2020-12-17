import { Image, useColorMode } from "@chakra-ui/react";

const PatternBackground = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Image
        src={colorMode === "light" ? "/bg-light.svg" : "/bg.svg"}
        position="fixed"
        right={["-200px", "-200px", "-200px", "0"]}
        alt=""
      />
      <Image
        src={colorMode === "light" ? "/bg-light.svg" : "/bg.svg"}
        position="fixed"
        left={["-200px", "-200px", "-200px", "0"]}
        bottom="0"
        transform="rotate(180deg)"
        alt=""
      />{" "}
    </>
  );
};

export default PatternBackground;
