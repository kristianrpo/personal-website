import { JSX, ComponentProps } from "react";
import Tag from "@/components/atoms/Tag";

type TagItem = ComponentProps<typeof Tag>;

interface TagGridProps {
  tags: TagItem[];
}

export default function TagGrid({ tags }: TagGridProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag, key) => (
        <Tag key={key} label={tag.label} variant={tag.variant} />
      ))}
    </div>
  );
}
