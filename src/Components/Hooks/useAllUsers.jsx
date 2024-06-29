import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllUsers = () => {
   const { data: users = [], isLoading } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const { data } = await axios(
            "https://602e7c2c4410730017c50b9d.mockapi.io/users/"
         );

         return data;
      },
   });

   return [users, isLoading];
};

export default useAllUsers;
