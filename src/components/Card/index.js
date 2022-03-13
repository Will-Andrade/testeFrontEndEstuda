import styled from 'styled-components';

const Container = styled.div`
    padding: 1rem;
    border: .1rem solid #0f0;
`;

export function Card() {
    return (
        <Container>
            <p>Gerenciar algumaCoisa</p>
        </Container>
    );
}
