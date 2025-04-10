import { render, screen } from '@testing-library/react';
import Todolist from '../components/Todolist'; // Adjust path as needed
import '@testing-library/jest-dom';

test('Todo list component loads', () => {
  render(<Todolist />);

});
