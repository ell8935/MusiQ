import styled from "styled-components";

const RoomScreenStyled = styled.div`
  display: grid;
  font-family: "Open Sans", sans-serif;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 10% 1fr 1fr;
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  height: calc(100vh - 5rem);

  .header {
    grid-area: 1 / 1 / 2 / 7;
  }

  .player {
    grid-area: 2 / 1 / 4 / 4;
  }

  .searchBar {
    grid-area: 2 / 4 / 3 / 7;
  }

  .chat {
    grid-area: 3 / 4 / 4 / 7;
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10% 75vh auto auto;

    .header {
      grid-area: 1 / 1 / 2 / 5;
    }

    .player {
      grid-area: 2 / 1 / 3 / 5;
      overflow-y: auto;
    }

    .searchBar {
      grid-area: 3 / 1 / 4 / 5;
    }

    .chat {
      grid-area: 4 / 1 / 5 / 5;
    }
  }
`;

export default RoomScreenStyled;
