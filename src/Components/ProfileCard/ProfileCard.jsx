/* eslint-disable react/prop-types */

import { TfiEmail } from "react-icons/tfi";

const ProfileCard = ({ user, handleShowDetails }) => {
   return (
      <div className="p-8 flex flex-wrap space-x-6 dark:bg-gray-50 dark:text-gray-800">
         <div className="flex-shrink-0 w-full mb-6  sm:mb-0">
            <img
               src={user.avatar}
               alt={user?.profile?.username}
               className="object-cover object-center size-20 rounded-full dark:bg-gray-500"
            />
         </div>
         <div className="flex flex-col space-y-4">
            <div>
               <h2 className="text-2xl font-semibold">
                  {user?.profile?.username}
               </h2>
               <span className="text-sm dark:text-gray-600">
                  {user?.jobTitle}
               </span>
            </div>

            <div className="flex items-center space-x-2">
               <TfiEmail />
               <span className="dark:text-gray-600">
                  {user?.profile?.email}
               </span>
            </div>

            <button
               onClick={() => handleShowDetails(user.id)}
               className="btn btn-sm btn-primary bg-violet-600 text-white"
            >
               View Details
            </button>
         </div>
      </div>
   );
};

export default ProfileCard;
