import styled from 'styled-components';

const Container = styled.div`
    a {
        border: .1rem solid #555;
        border-radius: .5rem;
        padding: 1rem 2rem;
        display: inline-block;
        font-size: 2.4rem;
        text-decoration: none;
        color: #333;

        &:hover {
            background-color: #333;
            color: #eee;
        }
    }
`;

export function Card() {
    return (
        <Container>
            <a href="/">Gerenciar algumaCoisa</a>
        </Container>
    );
}
