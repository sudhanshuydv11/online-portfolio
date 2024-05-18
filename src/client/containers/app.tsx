import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { FrontCoverContainer } from "./front-cover-container.tsx";
import { InfoContainer } from "./info-container.tsx";

const App = () => {


return(
<ChakraProvider> 
   <FrontCoverContainer/>
   <InfoContainer/>
</ChakraProvider>
);
};

export default App;