import React from 'react';
import {
  GridItem,
  ProgressBarItem,
  ProgressBarStyles,
  ProgressGrid,
  StatisticStyles,
  StreakStatsStyles,
  SummaryStatsStyles,
} from './stats.styles';
import { IRating } from '../../interfaces/fighter';

interface IProps {
  stats: IRating;
}

interface IStats {
  knockout: number;
  special: number;
  decision: number;
  basetext: string;
}

//Компонент прогрессбара
const ProgressBar = ({
  current,
  max,
  count,
  basetext,
}: {
  current: number;
  max: number;
  count: number;
  basetext: string;
}) => {
  const items = Array.from({ length: count }, (_, i: number) => ({
    filled: i / count <= current / max && current / max > 0 ? true : false,
  }));

  return (
    <ProgressBarStyles>
      {items.map((item, i) => (
        <ProgressBarItem
          kindOf={basetext}
          key={`item-${count}-${i}`}
          filled={item.filled}
        />
      ))}
    </ProgressBarStyles>
  );
};

const StreakStats = ({ knockout, special, decision, basetext }: IStats) => {
  const summary = knockout + special + decision;

  // Она работает только для слов с корнем "побед")
  // Вообще можно написать отдельную функцию в утилилиты, которая будет основу и окончания собирать
  // в зависимости от числа. Окончания будет подбирать из словаря, массива, объекта или чего-нибудь я там придумаю
  const suffix =
    summary > 20 && summary % 10 > 5
      ? ''
      : summary > 20 && summary % 10 > 1 && summary % 10 < 5
      ? 'ы'
      : summary % 10 <= 1 && summary >= 5
      ? ''
      : summary < 5 && summary > 1
      ? 'ы'
      : summary === 1
      ? 'а'
      : '';

  const win_strig = basetext + suffix;

  return (
    <StreakStatsStyles>
      <SummaryStats count={summary} text={win_strig} />
      <ProgressGrid>
        <GridItem>
          <ProgressBar
            basetext={basetext}
            current={knockout}
            max={summary}
            count={20}
          />{' '}
          <div>
            {knockout} Нокаутом ({Math.round((100 * knockout) / summary)}%)
          </div>
        </GridItem>
        <GridItem>
          <ProgressBar
            basetext={basetext}
            current={special}
            max={summary}
            count={20}
          />
          <div>
            {special} Приемом ({Math.round((100 * special) / summary)}%)
          </div>
        </GridItem>

        <GridItem>
          <ProgressBar
            basetext={basetext}
            current={decision}
            max={summary}
            count={20}
          />
          <div>
            {decision} Решением ({Math.round((100 * decision) / summary)}%)
          </div>
        </GridItem>
      </ProgressGrid>
    </StreakStatsStyles>
  );
};

// Если ноль, то покраисить в серый
const SummaryStats = ({
  count,
  text,
  isTie,
}: {
  count: number;
  text: string;
  isTie?: boolean;
}) => {
  return (
    <SummaryStatsStyles isTie={isTie}>
      <span className='stats-header'>{count}</span>
      <span className='stats-text'>
        {text.charAt(0).toUpperCase() + text.slice(1)}
      </span>
    </SummaryStatsStyles>
  );
};

export const StatisticComponent = ({ stats }: IProps) => {
  return (
    <StatisticStyles>
      <StreakStats
        knockout={stats.wins.knockout}
        special={stats.wins.special}
        decision={stats.wins.decision}
        basetext='побед'
      />
      <div style={{ height: 53, width: 1, background: '#eee' }} />
      <StreakStats
        knockout={stats.loses.knockout}
        special={stats.loses.special}
        decision={stats.loses.decision}
        basetext='поражен'
      />
      <div style={{ height: 53, width: 1, background: '#eee' }} />
      <SummaryStats count={stats.tie} isTie={true} text='ничьих' />
    </StatisticStyles>
  );
};
