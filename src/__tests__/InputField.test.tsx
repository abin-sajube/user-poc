import { render, screen } from "@testing-library/react";
import NavigationButton from "@/components/NavigationButton";
import InputField from "@/components/InputField";

const register = {
  name: "email",
  onBlur: jest.fn(),
  onChange: jest.fn(),
  ref: jest.fn(),
};

describe("Input Field component", () => {
  test("renders label and input", () => {
    //arrange
    render(
      <InputField
        label="Email"
        placeholder="Enter your email"
        register={register}
      />,
    );

    //act
    const input = screen.getByRole("textbox", { name: "Email" });

    //assert
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Enter your email");
    expect(input).toHaveAttribute("type", "text");
  });

  test("renders the provided input type", () => {
    //arrange
    render(
      <InputField
        label="Phone number"
        type="number"
        placeholder="Enter your phone number"
        register={{ ...register, name: "phone" }}
      />,
    );

    //act
    const input = screen.getByLabelText("Phone number");

    //assert
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
  });

  test("renders an error message", () => {
    //arrange
    render(
      <InputField
        label="Email"
        placeholder="Enter your email"
        error="Email is required"
        register={register}
      />,
    );

    //act
    const link = screen.getByText("Email is required");

    //assert
    expect(link).toBeInTheDocument();
  });
});
