import { useEffect } from "react";
import { getPeople } from "./apiPeople";
import { useQuery } from "@tanstack/react-query";

function useFetchPeople(updateData) {
  useEffect(() => {
    async function fetchPeople() {
      try {
        const res = await getPeople();
        updateData(res);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPeople();
  }, [updateData]);
}

export default useFetchPeople;

export function usePeople() {
  const {
    error,
    data: dataPeopleRaw,
    isLoading,
  } = useQuery({
    queryKey: ["people"],
    queryFn: getPeople,
  });

  const dataPeople = dataPeopleRaw || [];

  return { error, dataPeople, isLoading };
}
