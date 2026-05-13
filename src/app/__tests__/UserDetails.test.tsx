import UserCard from "../components/UserCard";
import { render, screen } from "@testing-library/react";
import UserDetails from "../components/UserDetails";

const user = {
  id: "1",
  name: "Abin",
  email: "abin@gmail.com",
  phone: "122232323",
};

describe("UserDetails", () => {
  test("renders the users name", () => {
    //arrange
    render(<UserDetails user={user} />);

    //act
    const heading = screen.getByRole("heading", { level: 2, name: "Abin" });

    //assert
    expect(heading).toBeInTheDocument();
  });

  test("renders the users email", () => {
    //arrange
    render(<UserDetails user={user} />);

    //act
    const element = screen.getByText("abin@gmail.com");

    //assert
    expect(element).toBeInTheDocument();
  });

  test("renders the users phone", () => {
    //arrange
    render(<UserDetails user={user} />);

    //act
    const element = screen.getByText("122232323");

    //assert
    expect(element).toBeInTheDocument();
  });

  //   test("renders a link to the user details page", () => {
  //     //arrange
  //     render(
  //       <UserDetails
  //         user={{
  //           id: "1",
  //           name: "Abin",
  //           email: "abin@gmail.com",
  //           phone: "122232323",
  //         }}
  //       />,
  //     );

  //     //act
  //     const link = screen.getByRole("link", { name: "Abin" });

  //     //assert
  //     expect(link).toBeInTheDocument();
  //   });
});
