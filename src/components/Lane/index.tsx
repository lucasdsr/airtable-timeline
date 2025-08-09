import { FC, ReactElement } from "react";

import { Row } from "../Row";
import { Column } from "../Column";

import { TimelineItemsArray } from "../../timelineItems";

import * as S from "./LaneItem/styles";
import { Box, Divider } from "@mui/material";
import { LaneItem } from "./LaneItem";

type ILane = {
  items: TimelineItemsArray;
};

export const Lane = ({ items }: ILane): ReactElement => (
  <Row>
    {items.map((item, index) => (
      <LaneItem
        item={item}
        key={item.id}
        isLastItem={index === items.length - 1}
      />
    ))}
  </Row>
);
