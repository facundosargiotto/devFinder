// Components
import { Stack, Text } from "@chakra-ui/react";
import BuscadorContainer from "./components/BuscadorContainer";

// media
import galaxia from "./media/galaxia.jfif"

function App() {
  return (
    <Stack w="100vw" h="100vh" justifyContent="center" alignItems="center" bgImage={galaxia} bgRepeat="repeat" bgSize="auto" overflowX="hidden" direction="column">
      <Stack w={{base: "100%", lg: "50%"}} alignItems="center">
        <Text fontSize={{base: "6xl", lg: "8xl"}} paddingTop="5rem" fontFamily="'Fascinate', cursive">DEVFINDER</Text>
      </Stack>
      <Stack w={{base: "100%", lg: "50%"}} h={{base: "100%", lg: "60%"}}>
        <BuscadorContainer />  
      </Stack>
    </Stack>
  );
}

export default App;
