import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { get } from "lodash";
import { organizationDetailsState } from "../state/organizationDetailState";
import { Header } from ".";
import { routes } from "../router";
import { Link } from "react-router-dom";
import { ChevronRight } from "../utils/Images";

export interface SideNavProps {
  organizationId: string;
}

export function SideNav({ organizationId }: SideNavProps) {
  const { contents, state } = useRecoilValueLoadable(
    organizationDetailsState(organizationId)
  );

  return (
    <div className="w-60 h-full fixed bg-gray-800 text-white">
      <div className="flex flex-col items-center">
        <Header />
        <p className="text-center text-3xl text-white">
          {state === "hasError" || state === "loading"
            ? null
            : get(contents, "name")}
        </p>
        <br />
        <br />
        <p className="text-3xl">
          <Link
            to={routes.organization.replace(":id", organizationId)}
            className="flex items-center"
          >
            <ChevronRight className="w-6 h-6" /> Test Report
          </Link>
        </p>
      </div>
    </div>
  );
}
