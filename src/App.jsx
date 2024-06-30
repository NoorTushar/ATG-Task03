import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Card from "./Components/Card/Card";
import useAllUsers from "./Components/Hooks/useAllUsers";
import LoadingSpinner from "./Components/Shared/LoadingSpinner";
import dummyImage from "./assets/person-dummy.jpg";

const App = () => {
   const [users, isLoading, isError] = useAllUsers();
   const [selectedUser, setSelectedUser] = useState(null);
   const [openModal, setOpenModal] = useState(false);
   const [isImageLoading, setIsImageLoading] = useState(true);

   const handleShowDetails = (user) => {
      console.log(user);
      setSelectedUser(user);
      setOpenModal(true);
      setIsImageLoading(true);
   };

   if (isLoading) return <LoadingSpinner />;

   return (
      <div className="">
         <h3 className="text-xl p-6 border-b border-b-slate-400">
            Total Users : {users?.length > 0 ? users?.length : "0"}
         </h3>

         {isError && (
            <h3 className="text-xl p-6 border-b border-b-slate-400">
               No data to show at the moment
            </h3>
         )}
         {!isError && (
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
               <div className="lg:col-span-7  flex items-center justify-center z-10 bg-transparent bottom-0 mx-auto  ">
                  {!openModal && (
                     <h3 className="hidden lg:block">
                        Click any card to view details
                     </h3>
                  )}

                  {selectedUser && openModal && (
                     <div className="space-y-1 lg:w-[500px] lg:h-[400px] text-primary lg:relative absolute right-0 lg:top-0 lg:right-0 top-[35%] left-0 bottom-0 shadow-lg shadow-violet-500 p-10  bg-black break-words rounded-lg border border-violet-500">
                        <div className="mb-4 relative flex justify-center ">
                           {isImageLoading && (
                              <img
                                 src={dummyImage}
                                 alt="Loading..."
                                 className="size-20 rounded-full object-cover"
                              />
                           )}
                           <img
                              src={selectedUser?.avatar}
                              alt={selectedUser?.profile?.username}
                              className={`size-20 object-cover rounded-full ${
                                 isImageLoading ? "hidden" : "block"
                              }`}
                              onLoad={() => setIsImageLoading(false)}
                              onError={(e) => {
                                 e.target.onerror = null;
                                 e.target.src = dummyImage;
                                 setIsImageLoading(false);
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
                              {selectedUser?.profile?.email ||
                                 "No data to show"}
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
         )}
      </div>
   );
};

export default App;
