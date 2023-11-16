import React from "react";

function Button({
  children = "",
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        `px-6 py-3 hidden md:block text-[#182226] font-bold text-center rounded-[118px] border-2 border-[#2C2F24]`,
        className,
      ].join(" ")}>
      {children}
    </div>
  );
}

export default Button;
