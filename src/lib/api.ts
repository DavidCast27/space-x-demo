import { type Doc, type ApiSpaceXResponse } from "../types/api";

const baseURL = "https://api.spacexdata.com/v5"

export const getLaunches = async () => {
  const res = await fetch(`${baseURL}/launches/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });
  const { docs: launches } = (await res.json()) as ApiSpaceXResponse;
  return launches

}

export const getLaunchesByID = async ({ id }: { id: string }) => {
  const res = await fetch(`${baseURL}/launches/${id}`);
  const launch = (await res.json()) as Doc;
  console.log(launch)
  return launch

}
