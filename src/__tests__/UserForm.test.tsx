import { render, screen } from "@testing-library/react";
import UserForm from "@/components/UserForm";
import userEvent from "@testing-library/user-event";

const register = {
  name: "email",
  onBlur: jest.fn(),
  onChange: jest.fn(),
  ref: jest.fn(),
};

describe("User Form component", () => {
  test("renders all form fields and submit button", () => {
    //arrange
    render(<UserForm />);

    //act
    const nameInput = screen.getByRole("textbox", { name: "Name" });
    const emailInput = screen.getByRole("textbox", { name: "Email" });
    const phoneNumberInput = screen.getByLabelText("Phone Number");
    const button = screen.getByRole("button", { name: "Create" });

    //assert
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("shows required validation message when user submitted empty form", async () => {
    //arrange
    const user = userEvent.setup();
    render(<UserForm />);

    //act
    const button = screen.getByRole("button", { name: "Create" });

    await user.click(button);

    //assert
    expect(screen.getByText("Name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Phone number is required")).toBeInTheDocument();
  });

  test("shows invalid email address", async () => {
    //arrange
    const user = userEvent.setup();
    render(<UserForm />);

    //act
    await user.type(screen.getByRole("textbox", { name: "Name" }), "Abin");
    await user.type(screen.getByRole("textbox", { name: "Email" }), "abin");
    await user.type(screen.getByLabelText("Phone Number"), "1212121212");
    await user.click(screen.getByRole("button", { name: "Create" }));

    //assert
    expect(
      await screen.findByText("Invalid email address"),
    ).toBeInTheDocument();
  });
});
