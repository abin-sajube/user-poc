"use client";

import { useForm } from "react-hook-form";
import InputField from "./InputField";

type UserFormData = {
  name: string;
  email: string;
  phone: string;
};

export default function UserForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>();

  const onSubmit = (data: UserFormData) => {
    console.log(data);

    alert("User created successfully");

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl p-8 space-y-6"
    >
      <InputField
        label="Name"
        placeholder="Enter your name"
        error={errors.name?.message}
        register={register("name", { required: "Name is required" })}
      />
      <InputField
        label="Email"
        placeholder="Enter your email"
        error={errors.email?.message}
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email address",
          },
        })}
      />
      <InputField
        label="Phone Number"
        type="number"
        placeholder="Enter your phone number"
        error={errors.phone?.message}
        register={register("phone", { required: "Phone number is required" })}
      />

      <button
        type="submit"
        className=" bg-blue-600 hover:bg-blue-800 cursor-pointer text-white px-5 py-3 rounded-xl"
      >
        Create
      </button>
    </form>
  );
}
