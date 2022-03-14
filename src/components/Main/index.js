import styled from 'styled-components';

const Container = styled.main`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Main(props) {
    return <Container>{props.children}</Container>
}
