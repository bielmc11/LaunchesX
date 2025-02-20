export interface LaunchesQuery {
  docs: Launch[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any | null;
  nextPage: number | null;
}

interface Launch {
  fairings: any;
  links: any;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: any[];
  details: string;
  crew: any[];
  ships: any[];
  capsules: any[];
  payloads: any[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: any[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: any;
  id: string;
}
