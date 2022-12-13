import styled from 'styled-components';

export const HistoryStyles = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 24px 0;

  max-width: 980px;
`;

export const Header = styled.h1`
  padding: 0 32px;
  margin: 0;
`;

export const HistoryList = styled.div`
  display: grid;

  min-width: 980px;
  grid-template-columns: 140px 1.1fr 1.7fr 1fr 0.5fr 0.5fr;

  border-bottom: 1px solid #eee;

  .header {
    font-style: normal;
    font-weight: 400;
    font-size: 0.86em;
    line-height: 110%;

    padding: 1em;
    padding-bottom: 1em;
    padding-right: 50px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    text-align: left;
    width: fit-content;

    /* or 13px */

    /* v2/999 */
    color: #999999;

    &:nth-child(6n + 1) {
      padding-left: 32px;
    }

    &:nth-child(6n + 6) {
      padding-right: 32px;
    }
  }

  .cell {
    display: flex;
    flex-direction: column;

    justify-content: center;

    padding: 15px;

    border-top: 1px solid #eee;

    &:nth-child(6n + 1) {
      padding-left: 32px;
    }

    &:nth-child(6n + 6) {
      padding-right: 32px;
    }

    &:nth-child(12n + 1),
    &:nth-child(12n + 2),
    &:nth-child(12n + 3),
    &:nth-child(12n + 4),
    &:nth-child(12n + 5),
    &:nth-child(12n + 6) {
      background: #fbfbfb;
    }

    .win,
    .lose {
      display: flex;
      justify-content: center;
      align-items: center;

      width: fit-content;

      font-style: normal;
      font-weight: 500;
      font-size: 0.86em;
      line-height: 130%;

      color: #ffffff;
      flex: none;
      order: 0;
      flex-grow: 0;

      padding: 0.14em 0.29em;
      border-radius: 4px;
    }
    .win {
      background: #35c244;
    }
    .lose {
      background: #db2828;
      border: 1px solid #db2828;
    }

    &.rival-cell {
      flex-direction: row;
      justify-content: flex-start;
      /* padding-left: 0;
      padding-right: 0; */
      gap: 12px;
      img {
        aspect-ratio: 1/1;
        object-fit: contain;
        border-radius: 50%;
        border: 1px solid #000;
      }
    }

    .sub-text {
      font-style: normal;
      font-weight: 400;
      font-size: 0.93em;
      line-height: 150%;
      font-feature-settings: 'pnum' on, 'lnum' on;

      color: #666666;
    }

    .rival {
      display: flex;
      flex-direction: column;

      justify-content: space-between;
    }
  }
`;
