import { Box, Paper, styled } from "@mui/material";
import { Row } from "../../Row";

export const LaneRow = styled(Row)(({}) => ({
  alignItems: "center",
}));

export const LaneCard = styled(Paper)`
  display: flex;
  padding: 12px;
  width: 200px;
  height: 50px;
  flex-direction: column;
  justify-content: space-between;
`;

export const DataRow = styled(Row)(({}) => ({
  justifyContent: "space-between",
  fontSize: "16px",
}));

export const ItemName = styled(Row)(({}) => ({
  width: "100%",
  fontWeight: "bold",
  fontSize: "16px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const Divider = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "2px",
  margin: "0 16px",
  backgroundColor: theme.palette.divider,
}));
