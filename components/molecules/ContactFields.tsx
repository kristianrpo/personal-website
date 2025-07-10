import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import { JSX } from "react";

interface ContactFieldsProps {
  form: { name: string; email: string; message: string };
  labelName: string;
  labelEmail: string;
  labelMessage: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function ContactFields({
  form,
  labelName,
  labelEmail,
  labelMessage,
  handleChange,
}: ContactFieldsProps): JSX.Element {
  return (
    <div className="space-y-4 text-black">
      <Input
        label={labelName}
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        label={labelEmail}
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Textarea
        label={labelMessage}
        name="message"
        value={form.message}
        onChange={handleChange}
        rows={5}
        required
      />
    </div>
  );
}
