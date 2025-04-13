import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Todolist from "../components/Todolist"; // Adjust path as needed
import "@testing-library/jest-dom";

describe("Todolist Component", () => {
  test("loads, adds and removes an item", async () => {
    // ARRANGE
    render(<Todolist />);

    // ASSERT (initial render)
    expect(screen.getByRole("textbox", { name: /add item/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Todolist");
    expect(screen.queryByRole("button", { name: /remove/i })).toBeNull(); // No remove button yet

    // ACT (add item)
    const input = screen.getByRole("textbox", { name: /add item/i });
    const addButton = screen.getByRole("button", { name: /add item/i });

    fireEvent.change(input, { target: { value: "New todo" } });
    fireEvent.click(addButton);

    // ASSERT (after adding item)
    await waitFor(() => {
      expect(screen.getByText("New todo")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /remove/i })).toBeInTheDocument();
    });

    // ACT (remove item)
    const removeButton = screen.getByRole("button", { name: /remove/i });
    fireEvent.click(removeButton);

    // ASSERT (after removal)
    await waitFor(() => {
      expect(screen.queryByText("New todo")).toBeNull();
      expect(screen.queryByRole("button", { name: /remove/i })).toBeNull();
    });
  });

  test("does not add empty todo item", async () => {
    // ARRANGE
    render(<Todolist />);
    const input = screen.getByRole("textbox", { name: /add item/i });
    const addButton = screen.getByRole("button", { name: /add item/i });

    // ACT
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(addButton);

    // ASSERT
    expect(screen.queryByRole("button", { name: /remove/i })).toBeNull();
  });
});
