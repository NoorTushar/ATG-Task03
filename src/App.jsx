// import axios from "axios";
// import useAllUsers from "./Components/Hooks/useAllUsers";
// import ProfileCard from "./Components/ProfileCard/ProfileCard";
// import ProfileDetailsCard from "./Components/ProfileDetailsCard/ProfileDetailsCard";
// import LoadingSpinner from "./Components/Shared/LoadingSpinner";
// import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import useAllUsers from "./Components/Hooks/useAllUsers";
import LoadingSpinner from "./Components/Shared/LoadingSpinner";
import dummyImage from "./assets/person-dummy.jpg";

// // import useAllUsers from "./Components/Hooks/useAllUsers";
// // import TestCard from "./Components/TestCard";

// function App() {
//    const [users, isLoading, isError] = useAllUsers();

//    // if (isLoading) return <LoadingSpinner />;
//    const [singleData, setSingleData] = useState({});
//    const [singleDataLoading, setSingleDataLoading] = useState(false);
//    const [showDetailsCard, setShowDetailsCard] = useState(false);

//    if (isLoading) return <LoadingSpinner />;

//    if (isError)
//       return (
//          <div className="p-10 relative min-h-screen flex flex-col items-center justify-center">
//             <p className="text-2xl">
//                No data to show at the moment. Please try again later.
//             </p>
//          </div>
//       );

//    const handleShowDetails = async (id) => {
//       setSingleDataLoading(true);
//       const { data } = await axios(
//          `https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`
//       );
//       console.log(data);
//       setShowDetailsCard(true);
//       setSingleData(data);
//       setSingleDataLoading(false);
//    };

//    return (
//       <div className="p-10 relative bg-slate-900">
//          <h3 className="text-xl mb-6">
//             Total Users : {users?.length > 0 ? users?.length : "0"}
//          </h3>
//          <div className="grid grid-cols-12">
//             {/* Left */}
//             <div className="space-y-6 max-h-[calc(100vh-140px)] overflow-y-scroll col-span-4 ">
//                {users.map((user, index) => (
//                   <ProfileCard
//                      key={index}
//                      user={user}
//                      handleShowDetails={handleShowDetails}
//                   />
//                ))}
//             </div>
//             {/* Right */}
//             <div className="col-span-8 m-10 mt-0">
//                <ProfileDetailsCard
//                   singleData={singleData}
//                   singleDataLoading={singleDataLoading}
//                   showDetailsCard={showDetailsCard}
//                />
//             </div>
//          </div>
//       </div>
//       // <div>
//       //    hello
//       //    <div className="border">
//       //       {users?.map((user, index) => (
//       //          <TestCard key={index} user={user} />
//       //       ))}
//       //    </div>
//       // </div>
//    );
// }

// export default App;

const App = () => {
   const [users, isLoading] = useAllUsers();
   const [selectedUser, setSelectedUser] = useState(null);
   const [openModal, setOpenModal] = useState(false);

   const handleShowDetails = (user) => {
      console.log(user);
      setSelectedUser(user);
      setOpenModal(true);
   };

   if (isLoading) return <LoadingSpinner />;
   return (
      <div className="">
         <h3 className="text-xl p-6 border-b border-b-slate-400">
            Total Users : {users?.length > 0 ? users?.length : "0"}
         </h3>
         <div className="grid grid-cols-12 relative">
            <div className="lg:col-span-5 col-span-12 max-h-[calc(100vh-78px)] overflow-scroll">
               {users.map((user) => (
                  <Card
                     key={user?.profile?.email}
                     user={user}
                     handleShowDetails={handleShowDetails}
                  />
               ))}
            </div>
            <div className="lg:col-span-7 flex items-center justify-center z-10 bg-transparent bottom-0 mx-auto  ">
               {!openModal && (
                  <h3 className="hidden lg:block">
                     Click any card to view details
                  </h3>
               )}

               {selectedUser && openModal && (
                  <div className="space-y-1 text-primary lg:relative absolute right-0 lg:top-0 lg:right-0 top-1/3 left-0 bottom-0 shadow-md shadow-violet-500 p-4 sm:p-8 lg:p-10 bg-black break-words rounded-lg">
                     <div className="mb-4 relative flex justify-center">
                        <img
                           src={selectedUser?.avatar}
                           alt={selectedUser?.profile?.username}
                           className="size-20 rounded-full"
                           onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = dummyImage;
                           }}
                        />
                        <button
                           onClick={() => setOpenModal(false)}
                           className="absolute right-5 top-0"
                        >
                           <IoMdClose className="text-2xl" />
                        </button>
                     </div>
                     <h2 className="font-medium">
                        Username:{" "}
                        <span className="text-gray-400 font-normal">
                           {selectedUser?.profile?.username ||
                              "No data to show"}
                        </span>
                     </h2>
                     <p className="font-medium">
                        First Name:{" "}
                        <span className="text-gray-400 font-normal">
                           {selectedUser?.profile?.firstName ||
                              "No data to show"}
                        </span>
                     </p>
                     <p className="font-medium">
                        Last Name:{" "}
                        <span className="text-gray-400 font-normal">
                           {selectedUser?.profile?.lastName ||
                              "No data to show"}
                        </span>
                     </p>
                     <p className="font-medium">
                        Email:{" "}
                        <span className="text-gray-400 font-normal">
                           {selectedUser?.profile?.email || "No data to show"}
                        </span>
                     </p>
                     <p className="font-medium">
                        User Created At:{" "}
                        <span className="text-gray-400 font-normal">
                           {new Date(
                              selectedUser?.createdAt
                           ).toLocaleDateString() || "No data to show"}
                        </span>
                     </p>
                     <p className="font-medium">
                        Bio:
                        <span className="text-gray-400 font-normal">
                           {" "}
                           {selectedUser?.Bio || "No data to show"}
                        </span>
                     </p>
                     <p className="font-medium">
                        Job Title:
                        <span className="text-gray-400 font-normal">
                           {" "}
                           {selectedUser?.jobTitle || "No data to show"}
                        </span>
                     </p>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default App;
