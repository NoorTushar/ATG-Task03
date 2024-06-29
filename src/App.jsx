import axios from "axios";
import useAllUsers from "./Components/Hooks/useAllUsers";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import ProfileDetailsCard from "./Components/ProfileDetailsCard/ProfileDetailsCard";
import LoadingSpinner from "./Components/Shared/LoadingSpinner";
import { useState } from "react";

function App() {
   const [users, isLoading] = useAllUsers();
   const [singleData, setSingleData] = useState({});
   const [singleDataLoading, setSingleDataLoading] = useState(false);
   const [showDetailsCard, setShowDetailsCard] = useState(false);

   if (isLoading) return <LoadingSpinner />;

   const handleShowDetails = async (id) => {
      setSingleDataLoading(true);
      const { data } = await axios(
         `https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`
      );
      console.log(data);
      setShowDetailsCard(true);
      setSingleData(data);
      setSingleDataLoading(false);
   };

   return (
      <div className="p-10 ">
         <h3>Total Users : {users?.length}</h3>
         <div className="grid grid-cols-12 gap-6">
            <div className="col-span-5 space-y-6 ">
               {users.map((user, index) => (
                  <ProfileCard
                     key={index}
                     user={user}
                     handleShowDetails={handleShowDetails}
                  />
               ))}
            </div>
            <div className="col-span-7">
               <ProfileDetailsCard
                  singleData={singleData}
                  singleDataLoading={singleDataLoading}
                  showDetailsCard={showDetailsCard}
               />
            </div>
         </div>
      </div>
   );
}

export default App;
