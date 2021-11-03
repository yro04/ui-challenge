export interface IOrganization {
  id: number;
  name: string;
  owner_email: string;
  owner_name: string;
  owner_picture: string;
}

export interface IReport {
  id: number;
  name: string;
  start_date: string | Date;
  duration: number;
  failed_tests: number;
  succeed_tests: number;
}

export interface IEndpoint {
  url: string;
  duration: number;
  status: "SUCCESS" | "FAILURE" | "ERROR";
}

export interface IReportDetails {
  id: number;
  endpoints: IEndpoint[];
  end_date: string;
  duration: number;
  job_name: string;
  branch: string;
  github_user: string;
  commit: string;
  environment_url: string;
}

export interface IBadge {
  success: boolean;
  title: string;
}
