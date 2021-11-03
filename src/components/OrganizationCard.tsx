import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../router";
import { IOrganization } from "../types";

export interface OrganizationProps {
  organization: IOrganization;
}

export function OrganizationCard({
  organization: {
    id,
    name,
    owner_email: ownerEmail,
    owner_name: ownerName,
    owner_picture: ownerPicture,
  },
}: OrganizationProps) {
  return (
    <Link
      to={routes.organization.replace(":id", id.toString())}
      className="border-2 text-white border-gray-300 px-4 py-2 md:px-12 md:py-8 bg-gray-400 hover:bg-gray-500 flex justify-between items-center"
    >
      <img
        className="h-12 w-12 rounded-full object-cover"
        src={ownerPicture}
        alt="Company"
      />
      <span>{name}</span>
      <span className="w-12"></span>
    </Link>
  );
};

export default OrganizationCard;
