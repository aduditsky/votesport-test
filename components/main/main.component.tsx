// Components
import { HistoryComponent } from 'components/fights-history/history.component';
import { ProfileComponent } from 'components/profile/profile.component';
import { StatisticComponent } from 'components/statistic/stats.component';

//Styles
import { MainContainer } from './main.styles';

//Interfaces
import { IFighter } from 'interfaces/fighter';

interface IProps {
  fighter: IFighter;
}

export const MainComponent = ({ fighter }: IProps) => {
  return (
    <MainContainer>
      <ProfileComponent
        names={fighter.names}
        fighterParams={fighter.params}
        category={fighter.categories}
        stats={fighter.rating}
        place={23}
      />
      <StatisticComponent stats={fighter.rating} />
      <HistoryComponent history={fighter.fightsHistories} />
    </MainContainer>
  );
};
