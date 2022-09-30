import { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
  className: string;
  id: string;
}

const SectionLayout = ({ children, className, id }: ILayout) => {
  return <div id={id} className={className}>{children}</div>;
};

export default SectionLayout;
