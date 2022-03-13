import styled from 'styled-components';

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: .1rem solid #555;
    padding: 2rem;

    a {
        text-decoration: none;
        color: #333;
        font-size: 3rem;

        &:hover {
            text-decoration: underline;
            color: #555;
        }
    }
`;

export function Header() {
    return (
        <Container>
            <a href='/'>Sistema de Gerenciamento Escolar</a>
        </Container>
    );
}