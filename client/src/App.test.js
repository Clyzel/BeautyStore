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

describe("Form", () => {
  test("render the Form component", () => {
    render(<Form />);
  });
});

describe("DallasPostList", () => {
  test("render the Form component", () => {
    render(<DallasPostList />);
  });
});

test("renders login Button", () => {
  render(<Login />);
  screen.getByRole("button", {
    name: /Login/
  });
});

describe("Nav", () => {
  test("render the Form component", () => {
    render(<Nav />);
  });
});