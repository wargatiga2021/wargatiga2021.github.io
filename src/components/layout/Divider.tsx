import { Image, useColorMode, Center } from "@chakra-ui/react";

const Divider = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Center>
        <Image
          src={colorMode === "light" ? "/divider.png" : "/divider-light.png"}
          align="center"
          height={150}
          alt=""
        />
      </Center>
    </>
  );
};

export default Divider;