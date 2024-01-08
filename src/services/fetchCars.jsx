import { useEffect } from "react";
import { getCars } from "./apiCars";

function useFetchCars(updateData) {
  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await getCars();
        updateData(res);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCars();
  }, [updateData]);
}

export default useFetchCars;
