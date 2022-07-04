import { Title } from "@elements";
import { CardProps } from "./types";

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="p-4 bg-theme-base-100 text-theme-base-content flex flex-col space-y-4 border">
      <Title>{title}</Title>
      <div className="text-base">{children}</div>
    </div>
  );
};

export default Card;
