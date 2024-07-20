import { useState } from "react"
import List from "./List"

const Bud = () => {
    const[data,setData]=useState([])
    const[inputData,setInputData]=useState("")
    const[isUpdateTrue,setIsUpdateTrue]=useState(false)
    const[index,setIndex]=useState(null)
    

    function deleteFunc(getInd){
        const newArr=data.slice()
        const filteredArr = newArr.splice(getInd,1)
        setData(newArr)
        
    }

    function updateOne(getId){
        setIndex(getId)
        setIsUpdateTrue(true)
        const newArr = data.slice()
        const itemToUpdate=newArr.slice(getId,1)
        setInputData(itemToUpdate)
    }

    function subimtForm(e){
        e.preventDefault()
       
        if(!inputData){
            return
        }
        if(isUpdateTrue){
            const copyArr=data.slice()
            const updatedArr =copyArr.splice(index,1,inputData)
            setData(updatedArr)
            setIsUpdateTrue(false)
            setIndex(null)
            return
        } else{
        setData([...data,inputData])
        }
        setInputData("")
        
    }

  return (
    <section className=' w-[70vw]  border-indigo-600 border-solid border'>
        <h1 className='text-center py-6 text-2xl font-serif font-semibold'>Grocery Bud</h1>
        <div className='w-3/4 mx-auto mt-4'>
            <form onSubmit={subimtForm} className="flex justify-between " >
                <input value={inputData} onChange={(e)=> setInputData(e.target.value) } type='text' className='px-2 py-1 outline-none border border-solid 
                border-indigo-600' placeholder='e.g eggs'/>
                
                <button  type="submit" className='p-1 border border-indigo-700 border-solid mr-8 rounded-md cursor-pointer bg-indigo-200'>Add</button>
            </form>
        </div>

        
        <List data={data} isUpdateTrue={isUpdateTrue} updateOne={updateOne} deleteFunc={deleteFunc} />
        
    </section>
  )
}

export default Bud