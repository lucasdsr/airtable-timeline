import { Column } from "../Column";
import timelineItems from "../../timelineItems";
import { assignLanes } from "../../utils/assignLanes";

import * as S from "./styles";
import { Lane } from "../Lane";

export const Timeline = () => {
  const lanes = assignLanes(timelineItems);

  return (
    <S.TimelineContainer>
      <S.TitleRow>
        <h1>Timeline</h1>
      </S.TitleRow>
      <S.LanesContainer>
        {lanes.map((lane, index) => (
          <Lane items={lane} key={index} />
        ))}
      </S.LanesContainer>
    </S.TimelineContainer>
  );
};
