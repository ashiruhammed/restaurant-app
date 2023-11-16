import React from "react";

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={["py-24 md:px-10 px-4", className].join(" ")}>
      {children}
    </div>
  );
}

export default Section;
