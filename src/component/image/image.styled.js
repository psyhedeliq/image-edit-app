import styled from 'styled-components';

export const StyledImage = styled.div`
  width: 256px;
  height: 144px;
  background-image: url('${({ path }) => path}');
  background-size: cover;
  background-position: center center;
  margin: 15px;
  transition: .25s;
  border: 3px solid #333;

  &:hover {
    transform: scale(1.1)
  }
`;
