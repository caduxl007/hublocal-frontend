import { IResponsible } from '../../../models/responsible';
import { Responsible } from '../../Cards/Responsible';
import { NotFoundData } from '../../NotFoundData';
import { TitleContent } from '../../TitleContent';
import { ContentAuth } from '../ContentAuth';
import { ContentCards } from '../ContentCards';

type Props = {
  responsibles: IResponsible[];
};

export function ContentCardsResponsibles({ responsibles }: Props) {
  return (
    <ContentAuth>
      <TitleContent>Responsáveis</TitleContent>
      <ContentCards>
        {responsibles.length ? (
          responsibles?.map((data) => (
            <Responsible key={data.id} responsible={data} />
          ))
        ) : (
          <NotFoundData />
        )}
      </ContentCards>
    </ContentAuth>
  );
}
