import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
});

describe("here", () => {
  test("render the Form component", () => {
    render(< component/>);
  });
});

describe("here2", () => {
  test("render the Form component", () => {
    render(< component/>);
  });
});

test("renders Button", () => {
  render(< component/>);
  screen.getByRole("button", {
    name: /here /
  });
});

describe("Nav", () => {
  test("render the Form component", () => {
    render(<component />);
  });
});