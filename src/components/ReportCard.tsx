import { formatDistance } from "date-fns";
import React from "react";
import { IReportDetails } from "../types";
import {
  Branch,
  Calendar,
  Clock,
  Commit,
  Github,
  GlobeAlt,
} from "../utils/Images";
import { IconText } from "./IconText";

export interface ReportCardProps {
  report: IReportDetails;
}

export function ReportCard({
  report: { end_date, duration, branch, github_user, commit, environment_url },
}: ReportCardProps) {
  return (
    <div className="w-auto inline-block rounded-md border-gray-500 border-2">
      <div className="flex flex-col items-start gap-x-1 px-3 py-2 bg-gray-500">
        <div className="flex justify-between items-start gap-x-5">
          <IconText icon={<Clock />}>
            Duration: {Math.round(duration / 60000)}m
          </IconText>
          <IconText icon={<Calendar />}>
            Finished{" "}
            {formatDistance(new Date(end_date), new Date(), {
              addSuffix: true,
            })}
          </IconText>
        </div>
        <div className="flex justify-between items-start gap-x-5">
          <IconText icon={<Branch />}>{branch}</IconText>
          <IconText icon={<Commit />}>{commit}</IconText>
          <IconText icon={<Github />}>{github_user}</IconText>
        </div>
        <IconText icon={<GlobeAlt />}>
          <a href={environment_url}>{environment_url}</a>
        </IconText>
      </div>
    </div>
  );
}

export default ReportCard;
