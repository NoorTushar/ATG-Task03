/* eslint-disable react/prop-types */
import dummyImage from "../../assets/person-dummy.jpg";
const Card = ({ user, handleShowDetails }) => {
   return (
      <div
         onClick={() => handleShowDetails(user)}
         className="flex items-center gap-4 p-8 bg-slate-800 m-4 rounded-lg shadow shadow-slate-400 hover:bg-slate-900 hover:shadow-violet-500 duration-300 cursor-pointer group"
      >
         <img
            src={user?.avatar}
            alt={user?.profile?.username}
            className="size-16 rounded-full"
            onError={(e) => {
               e.target.onerror = null;
               e.target.src = dummyImage;
            }}
         />
         <div className="">
            <h2 className="text-xl text-primary group-hover:text-violet-500 duration-300">
               {user?.profile?.username}
            </h2>
            <p className="text-sm">{user?.jobTitle}</p>
         </div>
      </div>
   );
};

export default Card;
