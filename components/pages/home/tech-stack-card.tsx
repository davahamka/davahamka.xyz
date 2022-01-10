export type CardProps = {
    img?: string
    label?: string
}

const TechStackCard = ({ label }: CardProps) => {
    return (
        <div className="h-[100px] border cursor-pointer hover:scale-105 duration-150 transition border-[#DFDFDF] dark:border-[#404040] rounded-lg p-2">
            <div className="flex flex-row items-center h-full px-4 space-x-2">
                <div className="w-1/2 flex justify-center">REA</div>
                <div className="w-1/2">{label}</div>
            </div>
        </div>
    )
}

export default TechStackCard