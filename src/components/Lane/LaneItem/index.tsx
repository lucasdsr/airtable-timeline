import { FC, ReactElement } from "react";

import { Row } from "../../Row";
import { Column } from "../../Column";

import { TimelineItem } from "../../../timelineItems";

import * as S from "./styles";

import { Tooltip } from "@mui/material";

type ILaneItem = {
  isLastItem: boolean;
  item: TimelineItem;
};

export const LaneItem = ({ item, isLastItem }: ILaneItem): ReactElement => (
  <S.LaneRow>
    <S.LaneCard>
      <Tooltip title={item.name} placement="top">
        <S.ItemName>{item.name}</S.ItemName>
      </Tooltip>
      <S.DataRow>
        <div>{item.start}</div>
        <div>{item.end}</div>
      </S.DataRow>
    </S.LaneCard>
    {!isLastItem && <S.Divider />}
  </S.LaneRow>
);
