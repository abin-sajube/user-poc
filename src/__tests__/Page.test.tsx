import { render, screen } from "@testing-library/react";
import UserCard from "../components/UserCard";
import Home from "../app/page";

describe("Home Page", () => {
  test("renders the page heading", () => {
    //arrange
    render(<Home />);

    //act
    const heading = screen.getByRole("heading", {
      level: 1,
      name: "User management",
    });

    //assert
    expect(heading).toBeInTheDocument();
  });

  test("renders navigation link to user page", () => {
    //arrange
    render(<Home />);

    //act
    const link = screen.getByRole("link", { name: "Go to users page" });

    //assert
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/users");
  });
});
