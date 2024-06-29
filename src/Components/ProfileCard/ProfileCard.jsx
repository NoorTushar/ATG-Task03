/* eslint-disable react/prop-types */
import { useState } from "react";
import defaultPic from "../../assets/default-pic.png";

const ProfileCard = ({ user, handleShowDetails }) => {
   const [imgSrc, setImgSrc] = useState(defaultPic);

   const handleImageError = () => {
      setImgSrc(defaultPic);
   };

   const handleImageLoad = () => {
      setImgSrc(user.avatar);
   };

   return (
      <div className="p-8 bg-slate-800 text-slate-200 rounded-xl">
         <div>
            <img
               src={imgSrc}
               alt={user.name}
               onError={handleImageError}
               onLoad={handleImageLoad}
               className="object-cover object-center size-20 rounded-full"
            />
         </div>
         <h2 className="text-lg font-semibold mt-2">
            {user?.profile?.username}
         </h2>
         <p className="text-sm mt-1">{user?.jobTitle}</p>

         <div className="mt-4">
            <button
               onClick={() => handleShowDetails(user.id)}
               className="btn btn-xs btn-primary text-white h-8 w-24 "
            >
               View Details
            </button>
         </div>
      </div>
   );
};

export default ProfileCard;
