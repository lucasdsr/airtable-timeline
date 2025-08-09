import { Box, styled } from "@mui/material";
import { Column } from "../Column";

export const TimelineContainer = styled(Box)`
  width: calc(100% - 3rem);
  padding: 1.5rem;
`;

export const TitleRow = styled(Box)`
  display: flex;
  justify-content: center;
  vertical-align: center;
`;

export const LanesContainer = styled(Column)`
  gap: 24px;
  max-width: 100%;
  overflow: auto;
  padding: 24px 0px;
`;
