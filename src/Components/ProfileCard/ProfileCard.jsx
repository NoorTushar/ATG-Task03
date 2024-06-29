/* eslint-disable react/prop-types */
import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
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
         <img
            src={imgSrc}
            alt={user.name}
            onError={handleImageError}
            onLoad={handleImageLoad}
            className="object-cover object-center size-20 rounded-full"
         />

         <div className="space-y-2">
            <h2 className="text-lg font-semibold">{user?.profile?.username}</h2>
            <span className="text-sm">{user?.jobTitle}</span>
            <div className="flex items-center space-x-2 text-sm">
               <TfiEmail />
               <span>{user?.profile?.email}</span>
            </div>
            <button
               onClick={() => handleShowDetails(user.id)}
               className="btn btn-xs btn-primary text-white h-8 w-24"
            >
               View Details
            </button>
         </div>
      </div>
   );
};

export default ProfileCard;
