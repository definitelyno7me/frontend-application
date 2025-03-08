"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  linkedIn: yup
    .string()
    .url("Invalid URL")
    .required("LinkedIn / Personal Website URL is required"),
  visas: yup.array().min(1, "Select at least one visa type"),
  additionalInfo: yup.string(),
});

type FormType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  linkedIn?: string;
  visas?: string[];
  additionalInfo?: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormType) => {
    //TODO: Do something here
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          What to understand your visa options?
        </h2>

        <input
          {...register("firstName")}
          placeholder="First Name"
          className="input"
        />
        <p className="text-red-500">{errors.firstName?.message}</p>

        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="input"
        />
        <p className="text-red-500">{errors.lastName?.message}</p>

        <input {...register("email")} placeholder="Email" className="input" />
        <p className="text-red-500">{errors.email?.message}</p>

        <input
          {...register("linkedIn")}
          placeholder="LinkedIn / Personal Website URL"
          className="input"
        />
        <p className="text-red-500">{errors.linkedIn?.message}</p>

        <h2 className="text-xl font-bold mt-4 mb-4 text-center">
          Visa categories of interest?
        </h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" {...register("visas")} value="O1" />
            <span className="ml-2">O-1</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" {...register("visas")} value="EB1A" />
            <span className="ml-2">EB-1A</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" {...register("visas")} value="EB2 NIW" />
            <span className="ml-2">EB-2 NIW</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("visas")}
              value="I don't know"
            />
            <span className="ml-2">I don&apos;t know</span>
          </label>
        </div>
        <p className="text-red-500">{errors.visas?.message}</p>

        <h2 className="text-xl font-bold mt-4 mb-4 text-center">
          How can we help you?
        </h2>

        <textarea
          {...register("additionalInfo")}
          placeholder="What is your current status and when does it expire?"
          className="input"
        ></textarea>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
