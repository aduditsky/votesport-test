export interface NameSpace {
  name: string;
  nickname: string;
  name_eng: string;
  photo: string;
  countryLogo: string;
}

export interface IParams {
  country: { name: string; fullAddress: string };
  dateborn: number;
  height: number; //в см
  weight: number; //в кг
}

interface Final {
  knockout: number;
  special: number;
  decision: number;
}

export interface IRating {
  place: number;
  wins: Final;
  loses: Final;
  tie: number;
}

export interface ICategories {
  style: string;
  weightClass: string;
  handLenght: number;
}

export interface FightHistory {
  total: string;

  // Тут, по хороему, нужно подтягивать другого бойца через базу данных, но для теста я просто создам еще один класс пустышку
  rival: {
    name: string;
    img: string;
    wins: number;
    loses: number;
    tie: number;
  };

  event: {
    name: string;
    date: number;
  };

  round: {
    row: number;
    time: number;
  };
  technique: {
    decision: string;
    lastHit: string;
  };

  bets: number;
}

export interface IFighter {
  names: NameSpace;
  rating: IRating;
  params: IParams;
  categories: ICategories;
  fightsHistories: FightHistory[];
}
