import { Box, Paper, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[500],
  display: "flex",
  width: "100vw",
  height: "100vh",
}));

export const StyledCard = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexGrow: "1",
  gap: "12px",
  overflow: "auto",
  margin: "6.25rem 12.5rem",

  [theme.breakpoints.down("md")]: {
    margin: "3.125rem 6.25rem",
  },

  [theme.breakpoints.down("sm")]: {
    margin: "1.5rem 3.125rem",
  },
}));
