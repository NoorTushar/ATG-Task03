import LoadingSpinner from "../Shared/LoadingSpinner";

/* eslint-disable react/prop-types */
const ProfileDetailsCard = ({
   singleData,
   singleDataLoading,
   showDetailsCard,
}) => {
   if (singleDataLoading) return <LoadingSpinner />;
   return (
      showDetailsCard && (
         <div className="w-full left-0 ">
            <div className="p-10 bg-slate-800 text-slate-200 rounded-xl">
               <div className="space-y-2">
                  <div className="mb-4">
                     <img
                        src={singleData?.avatar}
                        alt={singleData?.profile?.username}
                        className="object-cover size-40 rounded-full"
                     />
                  </div>
                  <h2 className="font-medium">
                     Username:{" "}
                     <span className="text-gray-400 font-normal">
                        {singleData?.profile?.username || "No data to show"}
                     </span>
                  </h2>
                  <p className="font-medium">
                     First Name:{" "}
                     <span className="text-gray-400 font-normal">
                        {singleData?.profile?.firstName || "No data to show"}
                     </span>
                  </p>
                  <p className="font-medium">
                     Last Name:{" "}
                     <span className="text-gray-400 font-normal">
                        {singleData?.profile?.lastName || "No data to show"}
                     </span>
                  </p>
                  <p className="font-medium">
                     Email:{" "}
                     <span className="text-gray-400 font-normal">
                        {singleData?.profile?.email || "No data to show"}
                     </span>
                  </p>
                  <p className="font-medium">
                     User Created At:{" "}
                     <span className="text-gray-400 font-normal">
                        {new Date(singleData?.createdAt).toLocaleDateString() ||
                           "No data to show"}
                     </span>
                  </p>
                  <p className="font-medium">
                     Bio:
                     <span className="text-gray-400 font-normal">
                        {" "}
                        {singleData?.Bio || "No data to show"}
                     </span>
                  </p>
                  <p className="font-medium">
                     Job Title:
                     <span className="text-gray-400 font-normal">
                        {" "}
                        {singleData?.jobTitle || "No data to show"}
                     </span>
                  </p>
               </div>
            </div>
         </div>
      )
   );
};

export default ProfileDetailsCard;
