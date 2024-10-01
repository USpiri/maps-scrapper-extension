import { ReactNode } from "react";

interface LayoutProps {
  className?: string;
  children?: ReactNode;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <main className={`${className} bg-stone-100 text-neutral-800 p-4 min-w-96`}>
      {children}
    </main>
  );
};
