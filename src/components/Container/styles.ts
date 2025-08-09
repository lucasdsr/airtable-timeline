import { Box, Paper, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[500],
  display: "flex",
  width: "100vw",
  height: "100vh",
}));

export const StyledCard = styled(Paper)`
  display: flex;
  flex-grow: 1;
  gap: 12px;
  margin: 6.25rem 12.5rem;
`;
