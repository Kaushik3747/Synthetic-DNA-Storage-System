import { NavLink } from "react-router-dom";
import { MdUploadFile } from "react-icons/md";

import {
MdDashboard,
MdStorage,
MdUploadFile,
MdPerson
}
from "react-icons/md";

import {
FaDna
}
from "react-icons/fa";

export default function Sidebar(){

return(

<div className="w-72 bg-slate-900 h-screen p-6 fixed">

<h1 className="text-cyan-400 text-3xl font-bold">

🧬 DNA Storage

</h1>

<div className="mt-12 space-y-6">

<NavLink to="/dashboard">

<MdDashboard/>

Dashboard

</NavLink>

<NavLink to="/encode">

<FaDna/>

Encode

</NavLink>

<NavLink to="/decode">

<FaDna/>

<NavLink
to="/upload"
className="flex items-center gap-3 hover:text-cyan-400"
>
<MdUploadFile size={22}/>
Upload
</NavLink>

Decode

</NavLink>

<NavLink to="/history">

<MdStorage/>

History

</NavLink>

<NavLink to="/upload">

<MdUploadFile/>

Upload

</NavLink>

<NavLink to="/profile">

<MdPerson/>

Profile

</NavLink>

</div>

</div>

)

}