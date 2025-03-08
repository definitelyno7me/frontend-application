"use client";

import { useState } from "react";
import LeadForm from "@/components/lead-form";
import Confirmation from "@/components/confirmation";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const onBack = () => {
    setSubmitted(false);
  };

  const onSubmitted = () => {
    setSubmitted(true);
  };

  return submitted ? (
    <Confirmation onBack={onBack} />
  ) : (
    <LeadForm onSubmitted={onSubmitted} />
  );
}
