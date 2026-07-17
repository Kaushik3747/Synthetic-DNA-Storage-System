import { motion } from "framer-motion";

export default function StatsCard({
    title,
    value,
    icon,
    color
}){

    return(

        <motion.div
        whileHover={{scale:1.05}}
        className={`rounded-xl p-6 shadow-lg border ${color} bg-slate-900`}
        >

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-gray-400">

                        {title}

                    </p>

                    <h2 className="text-4xl font-bold mt-2">

                        {value}

                    </h2>

                </div>

                <div className="text-5xl">

                    {icon}

                </div>

            </div>

        </motion.div>

    )

}