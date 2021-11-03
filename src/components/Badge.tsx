import React from "react";
import { IBadge } from "../types";
import { CheckCircle, XCircle } from "../utils/Images";

export interface BadgeProps extends IBadge {}

export function Badge({ success, title }: BadgeProps) {
  const color = success ? "bg-green-400" : "bg-red-400";

  return (
    <div className={`inline-block w-auto rounded-xl px-2 ${color}`}>
      <div className="flex gap-1 items-center">
        {success ? <CheckCircle /> : <XCircle />}
        <span className="uppercase">{title}</span>
      </div>
    </div>
  );
}

export default Badge;
