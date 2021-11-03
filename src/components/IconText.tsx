import React from "react";

export interface IconProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

export function IconText({ icon, children }: IconProps) {
  return (
    <div className="flex gap-1 items-center">
      {icon}
      <div>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default IconText;
