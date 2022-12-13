import styled from 'styled-components';

export const ProfileStyles = styled.div`
  padding: 24px 32px 40px 32px;
  background: #ffffff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

//Блок имени
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;

  /* font-family: 'Golos'; */
  font-style: normal;
  font-weight: 600;
  font-feature-settings: 'pnum' on, 'lnum' on;

  font-size: 2.3em;
  line-height: 1.3;

  color: #1e1e1e;
`;

export const SubTitle = styled.h2`
  padding: 0;
  margin: 0;

  /* font-family: 'Golos'; */
  font-style: normal;
  font-weight: 400;

  font-size: 0.93em;
  line-height: 1.5;

  color: #999999;
`;

//Карточка бойца
export const Card = styled.div`
  background: #fbfbfb;
  width: 163px;
  height: 183px;
  /* v2/e4e4e4 */
  border: 1px solid #e4e4e4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;

  gap: 8px;
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const RankData = styled.div`
  position: absolute;

  width: 100%;
  top: 0;

  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 0.71em;
    line-height: 150%;

    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #666666;

    opacity: 0.8;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  .short-name {
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    line-height: 150%;
    text-align: center;

    color: #1e1e1e;
  }

  .stats {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    text-align: center;

    color: #666666;
  }

  .bet-ratio {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #666666;
    &.active {
      font-weight: 600;
      color: #2873db;
    }
  }
`;

export const Photo = styled.div`
  padding-bottom: 0;
  height: fit-content;
  position: relative;

  display: flex;
  border: 0;

  img {
    padding: 11px;
    padding-top: 14px;
    padding-bottom: 0;
    object-fit: contain;

    z-index: 2;

    margin: 0;
    /* mix-blend-mode: multiply; */
    height: 100%;
    width: 100%;
  }

  .border-bottom {
    height: 1px;
    z-index: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 52.6%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0.4;
  }
`;

//Блок профиля
export const ProfileContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  flex: 1;

  border-bottom: 1px solid #eee;
`;

export const RatingTitle = styled.div`
  display: flex;

  align-items: center;
  gap: 8px;

  span {
    /* font-family: 'Golos'; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    /* v2/1E1E1E */
    color: #1e1e1e;
  }

  div {
    width: 18px;
    height: 18px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #cccccc;
    border-radius: 50%;

    /* font-family: 'Golos'; */
    font-style: normal;
    font-weight: 500;
    font-size: 0.71em;
    line-height: 150%;
    /* identical to box height, or 15px */

    /* v1/999 */
    color: #999999;
  }
`;

export const DataStyles = styled.div`
  display: flex;
  gap: 24px;

  /* flex: 1;
  justify-content: flex-start;
  align-items: center; */

  .col {
    font-size: 1.14em;
    line-height: 150%;

    display: flex;
    flex-direction: column;
    gap: 0.57em;

    &.desc {
      font-style: normal;
      font-weight: 400;

      color: #666666;
    }

    &.desk-data {
      span:last-child {
        color: #888;
      }
    }
  }
`;

//Блок доп. параметров
export const AdditionalParams = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 3px;

    span:first-child {
      font-style: normal;
      font-weight: 400;
      font-size: 1em;
      line-height: 150%;
      color: #999999;
    }

    span:last-child {
      font-style: normal;
      font-weight: 500;
      font-size: 1em;
      line-height: 150%;
      color: #1e1e1e;
    }
  }
`;
