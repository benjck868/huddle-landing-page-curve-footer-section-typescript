type dataProps = {
    icon : string
    total: string
    text: string
}
type Hero2Props = {
    data: dataProps[]
}


export default function Hero2({data}: Hero2Props) {
  return (
    <div className="flex flex-col gap-y-10 md:flex-row place-content-center md:w-full md:place-content-around">
        {
            data.map((n)=>{
                return (
                    <div className="flex flex-col gap-y-5">
                        <img src={'./public/images/'+n.icon} className="w-16"/>
                        <span className="text-8xl font-bold">{n.total}</span>
                        <span className="text-lg text-slate-400 gap-4">{n.text}</span>
                    </div>
                )
            })
        }
    </div>
  )
}
