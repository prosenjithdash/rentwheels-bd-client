import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRole = () => {
  const { user, loading } = useAuth();

  const { data: role='', isLoading, isError } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:8000/user/${user?.email}`);
      return data.role;
    },
  });

  // Just return the data and states
  return [role, isLoading, isError];
};

export default useRole;
