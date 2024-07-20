

const List = ({data,deleteFunc,updateOne,isUpdateTrue}) => {
    

  return (
    <div className="w-3/4 mx-auto mt-4 space-y-2 mb-2">
        {data.map((item,index)=>{
            

            return (<p className="indent-2 flex justify-between font-semibold" key={index}><span className={`${isUpdateTrue?"line-through":""}`}>{item.toUpperCase()}</span>

            <span className="text-[10px] space-x-1 flex mr-8">
            <span className=" rounded-md border border-indigo-700 border-solid bg-indigo-200 flex justify-center px-2"><button onClick={(index)=>deleteFunc(index)}>
                delete</button>
            </span>
            <span className="mr-8 rounded-md border border-indigo-700 border-solid bg-indigo-200 flex justify-center px-2">
                <button onClick={()=>updateOne(index)}>Update</button>
            </span>
            </span>
            </p>)
        })}
    </div>
  )
}

export default List