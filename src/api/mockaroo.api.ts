import axios from "axios";
import { IOrganization, IReport, IReportDetails } from "../types";

const baseUrl = "https://my.api.mockaroo.com";
const key = "2e435a20";

interface MockarooAPI {
  getAllOrganization(): Promise<IOrganization[]>;
  getOrganizationDetails(id: string): Promise<IOrganization>;
  getAllReports(organizationId: string): Promise<IReport[]>;
  getReportDetails(
    organizationId: string,
    reportId: string
  ): Promise<IReportDetails>;
}

export const mockarooApi: MockarooAPI = {
  getAllOrganization() {
    return axios
      .get(`${baseUrl}/organizations.json?key=${key}`)
      .then((res) => res.data);
  },
  getOrganizationDetails(id) {
    return axios
      .get(`${baseUrl}/organizations/${id}.json?key=${key}`)
      .then((res) => res.data);
  },
  getAllReports(organizationId) {
    return axios
      .get(`${baseUrl}/organizations/${organizationId}/reports.json?key=${key}`)
      .then((res) => res.data);
  },
  getReportDetails(organizationId, reportId) {
    return axios
      .get(
        `${baseUrl}/organizations/${organizationId}/reports/${reportId}/details.json?key=${key}`
      )
      .then((res) => res.data);
  },
};
