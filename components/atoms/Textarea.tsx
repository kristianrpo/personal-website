interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <textarea className="border rounded p-2 w-full" {...props} />
    </div>
  );
}
