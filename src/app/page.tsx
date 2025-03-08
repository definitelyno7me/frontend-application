"use client";

import { useState } from "react";
import LeadForm from "@/components/lead-form";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmitted = () => {
    setSubmitted(true);
  };

  return submitted ? (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold">Thank You!</h2>
        <p className="my-4">
          Your information was submitted to our team of immigration attorneys
        </p>
        <button className="btn" onClick={() => setSubmitted(false)}>
          Go Back to Homepage
        </button>
      </div>
    </div>
  ) : (
    <LeadForm onSubmitted={onSubmitted} />
  );
}
