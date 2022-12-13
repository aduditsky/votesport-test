import { IFighter } from 'interfaces/fighter';

//Потом можно переделать, чтобы он считал количество побед/поражений/ничьи напрямую из истории боев
//Модель карточки бойца сделал на скорую руку, не предусмотрел это, но исправить не сложно будет

export const data: IFighter = {
  names: {
    name: 'Доминик Рейес',
    name_eng: 'The Devastator',
    nickname: 'Dominick Reyes',
    photo: '/images/photo.png',
    countryLogo: '/images/svg/usa.svg',
  },

  params: {
    dateborn: new Date('1989-12-26').getTime(),
    country: { name: 'США', fullAddress: 'Викторвилл, Калифорния' },
    height: 193.04, //см
    weight: 92.99, //кг
  },
  categories: {
    handLenght: 195.58,
    style: 'Борьба, кикбоксинг',
    weightClass: 'Полутяжелый вес / Light heavyweight',
  },

  rating: {
    loses: { knockout: 1, special: 0, decision: 1 },
    place: 12,
    tie: 0,
    wins: { knockout: 7, special: 2, decision: 3 },
  },

  fightsHistories: [
    {
      bets: 12,
      event: {
        date: 1670968005062,
        name: 'UFC Fight Night: Брансон vs. Холланд',
      },
      rival: {
        img: '/images/rival-1.png',
        loses: 2,
        name: 'Д. Фигередо',
        tie: 0,
        wins: 21,
      },
      round: { row: 1, time: 1670968005062 },
      technique: {
        decision: 'TKO',
        lastHit: 'Punches',
      },
      total: 'Победа',
    },
    {
      bets: 12,
      event: {
        date: 1670968005062,
        name: 'UFC 260: Миочич vs. Нганну',
      },
      rival: {
        img: '/images/rival-1.png',
        loses: 2,
        name: 'Д. Фигередо',
        tie: 0,
        wins: 21,
      },
      round: { row: 1, time: 1670968005062 },
      technique: {
        decision: 'TKO',
        lastHit: 'Punches',
      },
      total: 'Поражение',
    },
    {
      bets: 12,
      event: {
        date: 1670968005062,
        name: 'UFC Fight Night: Брансон vs. Холланд',
      },
      rival: {
        img: '/images/rival-1.png',
        loses: 2,
        name: 'Д. Фигередо',
        tie: 0,
        wins: 21,
      },
      round: { row: 1, time: 1670968005062 },
      technique: {
        decision: 'TKO',
        lastHit: 'Punches',
      },
      total: 'Поражение',
    },
    {
      bets: 12,
      event: {
        date: 1670968005062,
        name: 'UFC Fight Night: Брансон vs. Холланд',
      },
      rival: {
        img: '/images/rival-1.png',
        loses: 2,
        name: 'Д. Фигередо',
        tie: 0,
        wins: 21,
      },
      round: { row: 1, time: 1670968005062 },
      technique: {
        decision: 'TKO',
        lastHit: 'Punches',
      },
      total: 'Победа',
    },
    {
      bets: 12,
      event: {
        date: 1670968005062,
        name: 'UFC Fight Night: Брансон vs. Холланд',
      },
      rival: {
        img: '/images/rival-1.png',
        loses: 2,
        name: 'Д. Фигередо',
        tie: 0,
        wins: 21,
      },
      round: { row: 1, time: 1670968005062 },
      technique: {
        decision: 'TKO',
        lastHit: 'Punches',
      },
      total: 'Победа',
    },
  ],
};
