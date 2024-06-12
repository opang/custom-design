import Image from "next/image"

const onFetchData = async() => {
    try {
        const res = await fetch('https://randomuser.me/api/?results=3', {
            cache: 'force-cache'
        })
        const resJSON = await res.json()
        return resJSON // Data yang Berisikan Array of Object
    } catch (error) {
        console.log(error)
    }
}


const MeetOurTeam = async() => {
    const posts = await onFetchData()
    return(
        <section style={{backgroundColor:"whitesmoke"}}>
            <div>
                <div className="text-slate-700 text-2xl md:text-4xl font-semibold flex flex-col items-center gap-8 pt-16 px-3">
                    <h1>Meet Our Creative Team</h1>
                    <div className="w-[55px] h-[3px] bg-red-500 mb-5"></div>
                </div>
                <div className="flex flex-col items-center  md:flex-row justify-center pt-8 pb-20">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {
                            posts.results.map((item, index) => {
                                return(
                                    <div className="text-slate-700 shadow-md w-[300px] p-5 text-center" key={item + index}>
                                        <Image src={item.picture.large} width={300} height={300} alt="img" className="rounded"/>
                                        <h5 className="text-xl font-semibold pt-4">{item.name.first}</h5>
                                        <p className="text-sm pt-1">{item.location.country}</p>
                                    </div>
                                )
                            })
                        }
                       
                    </div>
                    
                </div>
                
            </div>
        </section>
    )
}

export default MeetOurTeam