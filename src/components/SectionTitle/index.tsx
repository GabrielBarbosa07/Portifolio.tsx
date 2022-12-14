import { ReactNode } from "react";

interface SectionTitleProps {
  title: string | ReactNode
  description?: string | ReactNode;
}

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="w-full flex flex-col items-start gap-2 max-[640px]:items-center max-[640px]:justify-center"
    data-aos="fade-right">
      <h1 className="text-gree-200 text-7xl font-sans font-semibold max-[1024px]:text-[2.5rem] max-[640px]:text-[2rem]">
        #{title}
      </h1>
      {description && (
        <h2 className="text-bl-200 font-sans font-light text-[3.5rem] max-[1024px]:text-[1.8rem] max-[640px]:text-[1.4rem]">
          {description}
        </h2>
      )}
    </div>
  );
}
