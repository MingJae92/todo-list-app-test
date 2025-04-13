import { ChangeEvent, useState } from "react";
import TodoList from "../types/todolist.types"; // { id: number, text: string }
import {
  Root,
  StyledInput,
  AddButton,
  StyledListItem,
  RemoveButton,
} from "../styles/todolist.styles"; // Import styled components

function Todolist() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoList[]>([]);

  // Adding an item
  const addItem = () => {
    const trimmed = input.trim();
    if (trimmed !== "") {
      setTodos([...todos, { id: Date.now(), text: trimmed }]);
      setInput("");
    }
  };

  // Removing an item
  const removeItem = (id: number) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Root>
      <h3>Todolist</h3>

      {/* Accessible label for input */}
      <label htmlFor="todo-input">Add Item</label>

      <StyledInput
        id="todo-input" // connects with <label htmlFor="todo-input">
        type="text"
        placeholder="Add item"
        value={input}
        onChange={inputChangeHandler}
        aria-label="Add item" // helpful for screen readers
      />

      {/* Accessible button */}
      <AddButton onClick={addItem}>Add Item</AddButton>

      <ul>
        {todos.map((item) => (
          <StyledListItem key={item.id}>
            {item.text}
            <RemoveButton
              aria-label={`Remove ${item.text}`} // clear action for screen reader
              onClick={() => removeItem(item.id)}
            >
              Remove
            </RemoveButton>
          </StyledListItem>
        ))}
      </ul>
    </Root>
  );
}

export default Todolist;
