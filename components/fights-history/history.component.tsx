import React from 'react';
import { FightHistory } from 'interfaces/fighter';
import { Header, HistoryList, HistoryStyles } from './history.styles';

const HistoryItem = () => {
  return <div>123</div>;
};

interface IProps {
  history: FightHistory[];
}

export const HistoryComponent = ({ history }: IProps) => {
  return (
    <HistoryStyles>
      <Header>История боев</Header>
      <HistoryList>
        {/* Шапка */}
        <div className='header'>Результат</div>
        <div className='header'>Соперник</div>
        <div className='header'>Событие</div>
        <div className='header'>Способ</div>
        <div className='header'>
          Раунд
          <br />и время
        </div>
        <div className='header'>
          Кол-во
          <br />
          пари
        </div>
        {history.map((fightItem, i) => {
          return (
            <React.Fragment key={`${fightItem.rival.name}-${i}`}>
              <div className='cell'>
                <span
                  className={`${fightItem.total === 'Победа' ? 'win' : 'lose'}`}
                >
                  {fightItem.total}
                </span>
              </div>
              <div className='cell rival-cell'>
                <img
                  src={fightItem.rival.img}
                  width={40}
                  height={40}
                  alt={fightItem.rival.name}
                />
                <div className='rival'>
                  <span>{fightItem.rival.name}</span>
                  <span className='sub-text'>
                    {fightItem.rival.wins}-{fightItem.rival.loses}-
                    {fightItem.rival.tie}
                  </span>
                </div>
              </div>
              <div className='cell'>
                <span>{fightItem.event.name}</span>
                <span className='sub-text'>
                  {new Date(fightItem.event.date).toLocaleString('ru-RU', {
                    timeZone: 'UTC',
                    dateStyle: 'short',
                  })}
                </span>
              </div>
              <div className='cell'>
                <span>{fightItem.technique.decision}</span>
                <span className='sub-text'>{fightItem.technique.lastHit}</span>
              </div>
              <div className='cell'>
                <span>{fightItem.round.row}</span>
                <span className='sub-text'>
                  {new Date(fightItem.round.time).toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
              <div className='cell'>
                {fightItem.bets > 0 ? fightItem.bets : '-'}
              </div>
            </React.Fragment>
          );
        })}
      </HistoryList>
    </HistoryStyles>
  );
};
