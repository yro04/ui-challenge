import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../router";
import { IReport } from "../types";

export interface ReportItemProps {
  report: IReport;
  organizationId: number;
}

export function ReportItem({ report, organizationId }: ReportItemProps) {
  return (
    <Link
      to={routes.reportDetails
        .replace(":id", organizationId.toString())
        .replace(":reportId", report.id.toString())}
      className="flex px-4 py-2 items-center text-white bg-gray-400"
    >
      <div className="flex flex-1 flex-col">
        <p className="text-xl font-bold">Execution #{report.id}</p>
        <p className="text-sm">2 min ago - 10m long</p>
      </div>
      <div className="w-32 text-green-800 text-center">
        <p>{report.succeed_tests} passed</p>
      </div>
      <div className="w-32 text-red-800 text-center">
        <p>{report.failed_tests} failed</p>
      </div>
    </Link>
  );
}

export default ReportItem;
