import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledFact = styled.div`
    text-align: center;
    margin: 20px;
    font-size: 20px;
`;

export default function PracticeInterview() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://cat-fact.herokuapp.com/facts')
            .then((response) => response.json())
            .then(response => {
                setData(response);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
            });
    }, []);

    console.log(data, 'data');

    if (data && !loading) {
        return (
            <div>
                {data.map(data => <StyledFact>{data.text}</StyledFact>)}
            </div>
        );
    }

    if (error) {
        return (
            <div>
                Something went wrong. Please reload.
            </div>
        );
    }
    
    return (<div>
        Loading!!!
    </div>);
};