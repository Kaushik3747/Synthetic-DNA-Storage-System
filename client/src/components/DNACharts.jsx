import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

export default function DNAChart(){

const data={
labels:[
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat",
"Sun"
],

datasets:[
{

label:"DNA Encodings",

data:[5,8,12,6,9,15,10],

backgroundColor:"#06b6d4"

}

]

};

return(

<div className="bg-slate-900 rounded-xl p-6">

<h2 className="text-2xl text-cyan-400 mb-4">

Weekly Encoding Activity

</h2>

<Bar data={data}/>

</div>

)

}