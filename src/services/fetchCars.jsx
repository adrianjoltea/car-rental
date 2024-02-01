import { getCars } from "./apiCars";
import { useQuery } from "@tanstack/react-query";

export function useCars() {
  const { error, data, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });

  console.log(error);
  const carData = data || [];

  return { error, carData, isLoading };
}
