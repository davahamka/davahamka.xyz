import { techStackData } from "contents/tech-stack"
import TechStackCard from "./tech-stack-card"

const TechStack = () => {
    return (
        <section className="mt-24">
            <div className="px-8 xl:px-0 pt-4 xl:w-[68rem] mx-auto">
                <div className="flex flex-col">
                    <h2 className="text-4xl font-bold">Current Tech Stack</h2>
                    <p className="text-[#BEBEBE] mt-4">Here is technology I user to develope!</p>
                </div>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {techStackData.map(item => (
                        <div key={item.label}>
                            <TechStackCard label={item.label} img={item.img} />
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default TechStack