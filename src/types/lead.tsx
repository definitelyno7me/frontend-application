import { FormType } from "./form";

export type LeadType = FormType & {
  status: "PENDING" | "REACHED_OUT";
  id: string;
};
