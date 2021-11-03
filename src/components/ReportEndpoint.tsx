import React, { useMemo } from "react";
import { IEndpoint } from "../types";

export type statusType = "ERROR" | "FAILURE" | "SUCCESS";

export interface ReportEndpointProps {
  endpoint: IEndpoint;
}

export function ReportEndpoint({
  endpoint: { url, duration, status },
}: ReportEndpointProps) {
  const styles = useMemo(
    () => (status === "SUCCESS" ? "border-green-800" : "border-red-800"),
    [status]
  );

  return (
    <div
      className={`flex p-4 bg-gray-300 text-sm justify-between border-l-2 ${styles}`}
    >
      <code className="text-gray-600">
        {"{{METHOD}}"} {url}
      </code>
      <code className="text-gray-400">{Math.round(duration / 1000)}s</code>
    </div>
  );
}
