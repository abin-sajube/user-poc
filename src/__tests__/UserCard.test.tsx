import { render, screen } from "@testing-library/react";
import UserCard from "../components/UserCard";

const user = {
  id: "1",
  name: "Abin",
  email: "abin@gmail.com",
  phone: "122232323",
};

describe("UserCard", () => {
  test("renders the users name as a heading", () => {
    //arrange
    render(<UserCard user={user} />);

    //act
    const heading = screen.getByRole("heading", { level: 2, name: "Abin" });

    //assert
    expect(heading).toBeInTheDocument();
  });

  test("renders a link to the user details page", () => {
    //arrange
    render(
      <UserCard
        user={{
          id: "1",
          name: "Abin",
          email: "abin@gmail.com",
          phone: "122232323",
        }}
      />,
    );

    //act
    const link = screen.getByRole("link", { name: "Abin" });

    //assert
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/users/1");
  });

  test("does not display the user details link", () => {
    //arrange
    render(
      <UserCard
        user={{
          id: "1",
          name: "Abins",
          email: "abin@gmail.com",
          phone: "122232323",
        }}
      />,
    );

    //act
    const link = screen.queryByRole("link", { name: "Manu" });

    //assert
    expect(link).not.toBeInTheDocument();
  });
});
