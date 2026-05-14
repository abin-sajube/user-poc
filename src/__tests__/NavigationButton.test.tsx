import { render, screen } from "@testing-library/react";
import NavigationButton from "@/components/NavigationButton";

describe("Navigation button component", () => {
  test("renders title", () => {
    //arrange
    render(<NavigationButton title="Go back" urlPath="/users" />);

    //act
    const title = screen.getByText("Go back");

    //assert
    expect(title).toBeInTheDocument();
  });

  test("renders navigation link path", () => {
    //arrange
    render(<NavigationButton title="Go to users page" urlPath="/users" />);

    //act
    const link = screen.getByRole("link", { name: "Go to users page" });

    //assert
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/users");
  });

  test("uses default path when urlPath not provided", () => {
    //arrange
    render(<NavigationButton title="Home" />);

    //act
    const link = screen.getByRole("link", { name: "Home" });

    //assert
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
