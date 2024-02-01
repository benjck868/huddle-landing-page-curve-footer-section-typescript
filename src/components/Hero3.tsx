export type Hero3DataProps = {
    'title': string
    'content': string
    'image': string
    'imgPosition': 'right' | 'left'
}
type Hero3Props = {
    content : Hero3DataProps[]
}

export default function Hero3({content}: Hero3Props) {
  return (
    <div className="flex flex-col gap-y-20 md:w-full">
        {
            content.map((data,index)=>{
                if(data.imgPosition === 'right'){
                    return(
                       <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                            <div>
                                <h6>{data.title}</h6>
                                <p>
                                    {data.content}
                                </p>
                            </div>
                            <div>
                                <img src={'/images/'+data.image}/>
                            </div>
                            
                       </div>
                    )
                }

                return(
                    <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                        <div>
                            <img src={'/images/'+data.image}/>
                        </div>
                        <div>
                            <h6>{data.title}</h6>
                            <p>
                                {data.content}
                            </p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
