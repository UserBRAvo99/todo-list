import styled from "styled-components";

export const WrapperCreateAndFilter = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: center;
    gap: 30px;
  }
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 15px 0 60px 0;
  @media screen and (min-width: 767px) {
    flex-direction: ${({ $sort }) => $sort};
    flex-wrap: wrap;
    justify-content: start;
  }
`;
