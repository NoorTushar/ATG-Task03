import { useState } from "react";

const TestCard = ({ user }) => {
   const [show, setShow] = useState(false);
   return (
      <div className="border">
         <h1>{user?.profile?.username}</h1>
         <button
            className="btn-error btn text-white"
            onClick={() => setShow(!show)}
         >
            {show ? "Hide" : "Show"}
         </button>
         {show && (
            <div>
               <h3>{user.profile.username}</h3>
               <h3>dummy p</h3>
            </div>
         )}
      </div>
   );
};

export default TestCard;
