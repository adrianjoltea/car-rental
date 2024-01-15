import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "./apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signIn, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signup({ email, password }),
    onSuccess: user => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/");
      toast.success(
        "Account succesfully created! Please verify the new account from the user s email address"
      );
    },
    onError: error => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return { signIn, isLoading };
}
