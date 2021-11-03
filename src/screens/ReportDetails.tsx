import { get } from "lodash";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { Badge, ReportCard, ReportEndpoint } from "../components";
import { routes } from "../router";
import { reportDetailsState } from "../state/reportDetails";
import { IEndpoint } from "../types";
import { ChevronRight } from "../utils/Images";

export function ReportDetails() {
  const params = useParams();

  const [textFilter, setTextFilter] = useState("");

  const organizationId = get(params, "id");
  const reportId = get(params, "reportId");

  const { contents, state } = useRecoilValueLoadable(
    reportDetailsState({
      organizationId,
      reportId,
    })
  );

  const endpoints: IEndpoint[] =
    state === "hasValue" ? get(contents, "endpoints") : [];

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextFilter(e.target.value.trim());
  }

  // const fuseData = useMemo(() => {
  //   return FuseConfiguration(contents, {
  //     keys: ["example"],
  //   });
  // }, [contents]);

  // const resultsSuccess = useMemo(() => {
  //   Fuse
  // }, [textFilter])

  // const resultsFalse = useMemo(() => {
  //   Fuse
  // }, [textFilter])

  return (
    <div>
      <div className="flex gap-2">
        <p className="text-xl flex items-center">
          <Link
            to={routes.organization.replace(":id", organizationId.toString())}
          >
            Test Reports
          </Link>{" "}
          <ChevronRight /> Execution #{reportId}
        </p>
        {endpoints.length === 0 ? null : endpoints.filter(
            (e) => e.status !== "SUCCESS"
          ).length > 0 ? (
          <Badge success={false} title="FAILED" />
        ) : (
          <Badge success={true} title="PASSED" />
        )}
      </div>
      <br />
      {state === "hasValue" ? (
        <ReportCard key={contents.id} report={contents} />
      ) : null}
      <br />
      <br />
      <input
        className="w-full text-black border-4 border-gray-500 rounded-md"
        type="search"
        onChange={onChange}
        placeholder="Filter by endpoint..."
      />
      <br />
      <br />
      <ReportDetailsResult
        testsName="Failed Tests"
        endpoints={endpoints.filter(
          (e) => e.status !== "SUCCESS" && e.url.includes(textFilter)
        )}
        total={endpoints.length}
      />
      <br />
      <br />
      <ReportDetailsResult
        testsName="Passed Tests"
        endpoints={endpoints.filter(
          (e) => e.status === "SUCCESS" && e.url.includes(textFilter)
        )}
        total={endpoints.length}
      />
    </div>
  );
}

export interface ReportDetailsResultProps {
  testsName: string;
  endpoints: IEndpoint[];
  total: number;
}

export const ReportDetailsResult: React.FunctionComponent<ReportDetailsResultProps> =
  ({ testsName, endpoints, total }) => {
    return (
      <div>
        {endpoints.length > 0 && (
          <div>
            <p className="text-3xl">
              {testsName} ({endpoints.length} / {total})
            </p>
            <br />
            <div className="gap-2 flex flex-col">
              {endpoints.map((endpoint) => (
                <ReportEndpoint key={endpoint.url} endpoint={endpoint} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

export default ReportDetails;
