import React from 'react'
import { VStack, Image, Heading } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

const ExchangeCard = ({ name, img, url, rank, id }) => {
    return (
        <a href={url} target={"blank"} >
            <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'} m={'4'} css={{
                "&:hover": {
                    transform: 'scale(1.1)',
                },
            }} >
                <Image src={img} w={"10"} h={'10'} objectFit={'contain'} alt={'Exchange'} />
                <Heading size={'md'} noOfLines={1}>
                    {rank}
                </Heading>
                <Text>{name}</Text>
            </VStack>
        </a>
    )
}

export default ExchangeCard
