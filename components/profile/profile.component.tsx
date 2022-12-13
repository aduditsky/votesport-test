//Styles
import {
  AdditionalParams,
  Card,
  CardTitle,
  DataStyles,
  NameContainer,
  Photo,
  ProfileContainer,
  ProfileData,
  ProfileStyles,
  RankData,
  RatingTitle,
  SubTitle,
  Title,
} from './profile.styles';

//Interfaces
import { ICategories, IParams, IRating, NameSpace } from 'interfaces/fighter';

interface IProps {
  names: NameSpace;
  fighterParams: IParams;
  category: ICategories;
  stats: IRating;
  place: number;
  bet?: number;
}

function getAge(dateString: string | number) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export const ProfileComponent = ({
  names,
  fighterParams,
  category,
  place,
  stats,
  bet,
}: IProps) => {
  //Для перевода из одной величины в другую
  const smtoinch = 0.0328084;
  const kgtofund = 2.20462;

  //Для даты рождения
  const dateborn = new Date(fighterParams.dateborn);
  const age = getAge(fighterParams.dateborn);

  const wins = stats.wins.knockout + stats.wins.special + stats.wins.decision;
  const loses =
    stats.loses.knockout + stats.loses.special + stats.loses.decision;

  return (
    <ProfileStyles>
      <NameContainer>
        <Title>
          {names.name} «{names.nickname}»
        </Title>
        <SubTitle>{names.name_eng}</SubTitle>
      </NameContainer>
      <ProfileContainer>
        {/* Вынести в отдельный компонент */}
        <Card>
          <RankData>
            <span>№ {place}</span>
            <img src={names.countryLogo} alt={'asd'} />
          </RankData>
          <Photo>
            <img src={names.photo} alt={names.name} />
            <div className='border-bottom' />
          </Photo>
          <CardTitle>
            <span className='short-name'>
              {names.name.split(' ')[0].charAt(0).toUpperCase()}
              {'. '}
              {names.name.split(' ')[1].charAt(0).toUpperCase() +
                names.name.split(' ')[1].slice(1)}
            </span>
            <span className='stats'>
              {wins}-{loses}-{stats.tie}
            </span>
            <span className={`bet-ratio${bet && bet > 0 && ' active'}`}>
              {bet && bet > 0 ? bet : '-'}
            </span>
          </CardTitle>
        </Card>
        <ProfileData>
          <RatingTitle>
            <span>Рейтинг: №{place}</span>
            <div>?</div>
          </RatingTitle>
          <DataStyles>
            <div className='col desc'>
              <div>Страна</div>
              <div>Возраст</div>
              <div>Рост</div>
              <div>Вес</div>
            </div>
            <div className='col desk-data'>
              <div>
                <span>{fighterParams.country.name}</span>
                <span> / {fighterParams.country.fullAddress}</span>
              </div>
              <div>
                <span>{age}</span>
                <span>
                  {' '}
                  /{' '}
                  {dateborn.toLocaleString('ru-RU', {
                    timeZone: 'UTC',
                    dateStyle: 'short',
                  })}
                </span>
              </div>
              <div>
                <span>{fighterParams.height} см</span>{' '}
                <span>
                  {' '}
                  / {Math.round(fighterParams.height * smtoinch)}'
                  {Math.ceil(
                    (10 * (fighterParams.height * smtoinch)) %
                      Math.round(fighterParams.height * smtoinch)
                  )}
                  '' дюймов
                </span>
              </div>
              <div>
                <span>{fighterParams.weight} кг</span>
                <span>
                  {' '}
                  / {Math.round(fighterParams.weight * kgtofund)} фунтов
                </span>
              </div>
            </div>
          </DataStyles>
        </ProfileData>
      </ProfileContainer>
      <AdditionalParams>
        <div>
          <span>Весовая категория</span>
          <span>{category.weightClass}</span>
        </div>
        <div>
          <span>Стиль</span>
          <span>{category.style}</span>
        </div>
        <div>
          <span>Размах рук</span>
          <span>{category.handLenght} cм</span>
        </div>
      </AdditionalParams>
    </ProfileStyles>
  );
};
