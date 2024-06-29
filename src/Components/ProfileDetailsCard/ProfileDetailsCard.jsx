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
            <div className="flex flex-col p-6 dark:bg-gray-50 dark:text-gray-800">
               <img
                  src={singleData?.avatar}
                  alt=""
                  className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
               />
               <div>
                  <h2 className="text-xl font-semibold">
                     {singleData?.profile?.username || "No data to show"}
                  </h2>
                  <p>
                     First Name:{" "}
                     {singleData?.profile?.firstName || "No data to show"}
                  </p>
                  <p>
                     Last Name:{" "}
                     {singleData?.profile?.lastName || "No data to show"}
                  </p>
                  <p>
                     Email: {singleData?.profile?.email || "No data to show"}
                  </p>
                  <p>
                     User Created At:{" "}
                     {new Date(singleData?.createdAt).toLocaleDateString() ||
                        "No data to show"}
                  </p>
                  <p>Bio: {singleData?.Bio || "No data to show"}</p>
                  <p>Job Title: {singleData?.jobTitle || "No data to show"}</p>
               </div>
            </div>
         </div>
      )
   );
};

export default ProfileDetailsCard;
