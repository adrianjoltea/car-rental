import { getCurrentUser } from "./apiAuth";
import { useQuery } from "@tanstack/react-query";
export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  console.log(user);
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
