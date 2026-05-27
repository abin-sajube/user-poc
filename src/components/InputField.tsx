import { UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn;
};

export default function InputField({
  label,
  type = "text",
  placeholder,
  error,
  register,
}: InputFieldProps) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg border ${error ? "border-red-500" : "border-gray-300 "}`}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
