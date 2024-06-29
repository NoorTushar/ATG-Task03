import { useState } from "react";

const TestCard = ({ user }) => {
   const [hide, setHide] = useState(true);
   return (
      <div className="border">
         <h3>{user?.profile?.username}</h3>
         <button onClick={() => setHide(!hide)}>
            {hide ? "Show" : "Hide"}
         </button>
         {!hide && (
            <div>
               <h3>{user.profile.username}</h3>
               <h3>dummy p</h3>
            </div>
         )}
      </div>
   );
};

export default TestCard;
