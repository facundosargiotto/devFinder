// React hooks
import { useState, useRef } from "react";

// Chakra
import { Stack, Input, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

// Components
import Buscador from "./Buscador";

const BuscadorContainer = () => {

    const [userPrompt, setUserPrompt] = useState("");
    const inputElement = useRef();
  
    const searchHandler = (e) => {
        setUserPrompt(inputElement.current.value.trim())
        inputElement.current.focus();
    }

    const enterHandler = (e) => {
        if(e.keyCode === 13){
            setUserPrompt(inputElement.current.value.trim());
        }
    }


    return(
        <Stack direction="column" spacing="2rem" h="100%">
            <Stack w="100%" h={{base: "fit-content", lg:"5rem"}} bgGradient="linear(to-r, #396afc, #2948ff, #396afc)" borderRadius={10} direction={{base: "column", lg: "row"}} justifyContent="space-between">
                <Stack direction="row" alignItems="center" ps="2rem" w={{base: "100%", lg:"60%"}}>
                    <Search2Icon />
                    <Input ref={inputElement} onKeyDown={enterHandler} autoFocus placeholder="Search github username..." border="none" _focusVisible={{border: "none"}}></Input>
                </Stack>
                <Stack justifyContent="center" pe={{base: 0, lg:"2rem"}}>
                    <Button onClick={searchHandler} w="100%" bg="#2948ff" opacity={.9}>Search</Button>
                </Stack>
            </Stack>
            <Stack w="100%" h="100%" bgGradient="linear(to-r, #396afc, #2948ff, #396afc)" borderRadius={10} justifyContent="center" alignItems="center"> 
                    <Buscador userPrompt={userPrompt} />
            </Stack>
        </Stack>
    )
}

export default BuscadorContainer;