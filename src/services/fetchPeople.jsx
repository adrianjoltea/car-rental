import { useEffect } from "react";
import { getPeople } from "./apiPeople";

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
