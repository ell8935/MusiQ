import styled from "styled-components";

const PlayerStyled = styled.div`
  display: flex;
  padding-left: 1.5rem;
  flex-direction: column;
  padding: ${({ theme }) => theme.padding.big};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  .roomNameHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 1rem;
  }

  .playerDetailsContainer {
    display: flex;

    @media (max-width: 850px) {
      .player {
        display: none;
      }
    }

    .songDetails {
      margin-left: 1rem;
      display: flex;
      overflow: hidden;
      white-space: nowrap;
      flex-direction: column;

      h3,
      h5 {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export default PlayerStyled;
