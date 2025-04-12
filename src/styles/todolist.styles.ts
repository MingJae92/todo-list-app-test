import { styled } from "@mui/system";
import { Button, Input, ListItem } from "@mui/material";

// Styling the components using `styled`
export const Root = styled("div")({
  display: "flex",
  justifyContent: "center", // Horizontally center the content
  alignItems: "center",     // Vertically center the content
  height: "100vh",          // Full height of the viewport
  padding: "16px",
  backgroundColor: "#f9f9f9",
  flexDirection: "column",  // Stack items vertically
});

export const StyledInput = styled(Input)({
  marginBottom: "16px",
  width: "100%",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
});

export const AddButton = styled(Button)({
  padding: "8px 24px",
  backgroundColor: "#1976d2", // Primary color
  color: "#fff",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#115293", // Darker shade on hover
  },
});

export const StyledListItem = styled(ListItem)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "8px 0",
  padding: "8px",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
});

export const RemoveButton = styled(Button)({
  padding: "4px 16px",
  backgroundColor: "#d32f2f", // Error color
  color: "#fff",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#c62828", // Darker shade on hover
  },
});
