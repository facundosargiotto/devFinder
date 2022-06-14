import { Stack, Text, Image, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { BsTwitter } from "react-icons/bs"
import { ImLocation } from "react-icons/im"

import axios from "axios";

const Buscador = ({userPrompt}) => {

    const [usuario, setUsuario] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        const cargarData = () => {
            setIsLoading(true)
            const url = userPrompt === "" ? "https://api.github.com/users" : `https://api.github.com/users/${userPrompt}`;
            axios(url)
            .then(res => {
                setUsuario(res.data)
                setIsLoading(false)
            })
            .catch(e => {
                console.error(`El usuario ${userPrompt} no existe`)
                setUsuario("invalido")
                setIsLoading(false);
            })
        }
        cargarData();
    }, [userPrompt])

    return(
        isLoading ? <Spinner thickness="10px" speed="0.8s" size="xl" color="blue.500" /> : 

        usuario === "invalido" ? <Text>No se encontró al usuario</Text> :

            <Stack direction="column" w="100%" h="100%">
                <Stack direction={{base: "column", lg: "row"}} w="100%" h={{base:"fit-content", lg: "12rem"}} alignItems="center">
                    <Image visibility={usuario.length === 30 ? "hidden" : "visible"} boxSize="10rem" src={usuario.avatar_url} borderRadius="50%" m="2rem" />
                    <Stack w="100%" m="2rem" h="100%" direction={{base:"column", lg: "row"}} textAlign={{base: "center", lg:"start"}} alignItems="center">
                        <Stack h="12rem" justifyContent="center" flex={1} flexWrap="nowrap">
                            <Text fontWeight="bold" fontSize="2xl">{usuario.name}</Text>
                            <Text visibility={usuario.length === 30 ? "hidden" :  "visible"} fontWeight="bold">@{usuario.login}</Text>    
                            <Text>{usuario.bio === null ? "User has no bio" : usuario.bio}</Text>
                        </Stack>
                        <Stack flex={1} h="100%" justifyContent="center" alignItems="end" p="2rem">
                            <Text visibility={usuario.length === 30 ? "hidden" :  "visible"} fontSize="xs" fontWeight="bold">Joined {usuario.created_at}</Text>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack visibility={usuario.length === 30 ? "hidden" :  "visible"} direction="row" bg="rgba(0,0,0,0.2)" p={{base: 0, lg: "3rem"}} py={{base: "2rem"}} marginTop="3rem !important" justifyContent="space-between">
                    <Text fontSize={{base: "lg", lg: "xl"}} fontWeight="bold">Followers: {usuario.followers}</Text>
                    <Text fontSize={{base: "lg", lg: "xl"}} fontWeight="bold">Following: {usuario.following}</Text>
                    <Text fontSize={{base: "lg", lg: "xl"}} fontWeight="bold">Repos: {usuario.public_repos}</Text>
                </Stack>
                <Stack visibility={usuario.length === 30 ? "hidden" :  "visible"} direction="row" w="100%" h="100%" alignItems="center" p="2rem" justifyContent="space-around">
                    <Stack direction="row" flex={1} justifyContent="center" alignItems="center">
                        <ImLocation/>
                        <Text fontSize="" fontWeight="bold">{usuario.location === null ? "not specified" : usuario.location}</Text>
                    </Stack>
                    <Stack direction="row" flex={1} justifyContent="center" alignItems="center">
                        <BsTwitter/>
                        <Text fontSize="" fontWeight="bold">{usuario.twitter_username === null ? "not specified" : `@${usuario.twitter_username}`}</Text>
                    </Stack>
                </Stack>
            </Stack>
        
    )
}

export default Buscador;