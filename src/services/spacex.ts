import type { Launch, LaunchesQuery } from "../types";

export const getLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: { data_unix: "desc" },
        limit: 12,
      },
    }),
  });

  const data = (await res.json()) as LaunchesQuery;
  return data.docs;
};

export const getUpcomingLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/upcoming", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  const data = await res.json();
  return data;
};

export const getLaunchesById = async (id: string) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const data = (await res.json()) as Launch;
  return data;
};
