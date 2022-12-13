import styled from 'styled-components';

export const StatisticStyles = styled.div`
  padding: 24px 32px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;

  display: flex;

  gap: 1em;
`;

export const StreakStatsStyles = styled.div`
  display: flex;

  align-items: center;
  gap: 20px;
`;

//Для суммарки
export const SummaryStatsStyles = styled.div<{ isTie?: boolean }>`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  .stats-header {
    /* DemiBold/28-130% */
    /* font-family: 'Golos'; */
    font-style: normal;
    font-weight: 600;
    font-size: 2em;
    line-height: 130%;
    /* or 36px */
    font-feature-settings: 'pnum' on, 'lnum' on;

    /* v2/1E1E1E */
    color: ${(p) => (p.isTie ? '#ccc' : '#1e1e1e')};
  }

  .stats-text {
    font-style: normal;
    font-weight: 400;
    font-size: 0.93em;
    line-height: 150%;

    color: #999999;
  }
`;

//Прогресс бар
export const ProgressGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 22px;

  div:last-child {
    font-style: normal;
    font-weight: 400;
    font-size: 0.86em;
    line-height: 130%;

    color: #666666;
  }
`;

export const ProgressBarStyles = styled.div`
  //base css
  display: flex;
  gap: 2px;
`;

export const ProgressBarItem = styled.div<{ filled: boolean; kindOf: string }>`
  border-radius: 2px;

  width: 6px;
  height: 8px;
  border: 1px solid transparent;

  background: linear-gradient(
    270.49deg,
    #ff4f2e -67.26%,
    #ff4f2e 32.66%,
    #ffc500 99.58%
  );
  ${(props) =>
    props.kindOf === 'поражен'
      ? 'background: linear-gradient(90deg, #828282 0%, #666666 107.61%);'
      : ''}

  background-repeat: no-repeat;
  background-attachment: fixed;

  position: relative;
  ${(props) =>
    props.filled ? '' : 'border-color: #cccccc;background: #fbfbfb;'}

  display: flex;
`;
