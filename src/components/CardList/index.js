import { Card } from '../Card';
import styled from 'styled-components';

const Container = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
`;

export function CardList() {
    return (
        <Container>
            <Card />
            <Card />
            <Card />
        </Container>
    );
}
