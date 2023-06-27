import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { server } from '../index';
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setExchanges(data);
                setLoading(false);
                console.log(data);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        fetchExchanges();
    }, [])

    if (error) {
        return <ErrorComponent message={'Error While Eetching Exchanges'} />
    }

    return (
        <Container maxW={'container.xl'}>
            {loading ? <Loader /> :
                <>
                    <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
                        {exchanges.map((i) => (
                            <ExchangeCard name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} key={i.id} />
                        ))}
                    </HStack>
                </>}
        </Container>
    )
}

export default Exchanges
