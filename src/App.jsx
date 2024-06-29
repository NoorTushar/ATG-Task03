import ProfileCard from "./Components/ProfileCard/ProfileCard";
import ProfileDetailsCard from "./Components/ProfileDetailsCard/ProfileDetailsCard";

function App() {
   return (
      <div className="p-10">
         <h3>Users : 10</h3>
         <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
               <ProfileCard />
            </div>
            <div className="col-span-9">
               <ProfileDetailsCard />
            </div>
         </div>
      </div>
   );
}

export default App;
