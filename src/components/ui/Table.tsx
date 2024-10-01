import { ReactNode, TableHTMLAttributes } from "react";

export const Table = ({
  children,
  ...props
}: TableHTMLAttributes<HTMLTableElement>) => {
  return (
    <table className=" text-sm text-left" {...props}>
      {children}
    </table>
  );
};

interface TableHeadProps {
  headings: string[];
}

export const TableHead = ({ headings }: TableHeadProps) => {
  return (
    <thead className="text-xs uppercase bg-stone-200 sticky top-0">
      <tr>
        {headings.map((header, i: number) => (
          <TH key={i} className="whitespace-nowrap">
            {header}
          </TH>
        ))}
      </tr>
    </thead>
  );
};

export const TH = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <th scope="col" className={`${className} px-6 py-3`}>
      {children}
    </th>
  );
};

export const TD = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return <td className={`${className} px-3 py-1`}>{children}</td>;
};

export const TR = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return <tr className={`${className} bg-stone-50 border-b`}>{children}</tr>;
};
