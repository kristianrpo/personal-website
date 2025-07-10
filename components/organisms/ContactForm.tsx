"use client";

import { useState } from "react";
import ContactFields from "@/components/molecules/ContactFields";
import ModalWrapper from "@/components/atoms/ModalWrapper";
import Button from "@/components/atoms/buttons/ButtonSubmit";
import { JSX } from "react";

interface ContactFormProps {
  title: string;
  labelButton: string;
  labelName: string;
  labelEmail: string;
  labelMessage: string;
  errorMessage: string;
  successMessage: string;
  sendingLabelButton: string;
  sendLabelButton: string;
}

export default function ContactForm({
  title,
  labelButton,
  labelName,
  labelEmail,
  labelMessage,
  errorMessage,
  successMessage,
  sendingLabelButton,
  sendLabelButton,
}: ContactFormProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 z-40 cursor-pointer transition-colors duration-300"
        onClick={() => setOpen(true)}
      >
        {labelButton}
      </button>

      <ModalWrapper isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-bold mb-4 text-black">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <ContactFields
            form={form}
            labelEmail={labelEmail}
            labelMessage={labelMessage}
            labelName={labelName}
            handleChange={handleChange}
          />
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer rounded-xl"
          >
            {status === "sending" ? sendingLabelButton : sendLabelButton}
          </Button>
          {status === "success" && (
            <p className="text-green-600">{successMessage}</p>
          )}
          {status === "error" && <p className="text-red-600">{errorMessage}</p>}
        </form>
      </ModalWrapper>
    </>
  );
}
