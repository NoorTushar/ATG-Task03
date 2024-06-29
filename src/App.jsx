import axios from "axios";
import useAllUsers from "./Components/Hooks/useAllUsers";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import ProfileDetailsCard from "./Components/ProfileDetailsCard/ProfileDetailsCard";
import LoadingSpinner from "./Components/Shared/LoadingSpinner";
import { useState } from "react";

function App() {
   const [users, isLoading, isError] = useAllUsers();
   const [singleData, setSingleData] = useState({});
   const [singleDataLoading, setSingleDataLoading] = useState(false);
   const [showDetailsCard, setShowDetailsCard] = useState(true);

   if (isLoading) return <LoadingSpinner />;

   if (isError)
      return (
         <div className="p-10 relative min-h-screen flex flex-col items-center justify-center">
            <p className="text-2xl">
               No data to show at the moment. Please try again later.
            </p>
         </div>
      );

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
      <div className="p-10 relative bg-slate-900">
         <h3 className="text-xl mb-6">
            Total Users : {users?.length > 0 ? users?.length : "0"}
         </h3>
         <div className="grid grid-cols-12">
            {/* Left */}
            <div className="space-y-6 max-h-[calc(100vh-140px)] overflow-y-scroll col-span-4 ">
               {users.map((user, index) => (
                  <ProfileCard
                     key={index}
                     user={user}
                     handleShowDetails={handleShowDetails}
                  />
               ))}
            </div>
            {/* Right */}
            <div className="col-span-8 m-10 mt-0">
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
