import { useEffect, useState } from 'react'

import './App.css'
const url = 'https://api.github.com/users/QuincyLarson'


const useBasic = ()=>{
// const [count,setCount] = useState(0)
const [user,setUser]= useState(null)
// console.log(user)

useEffect(()=>{
  const fetchData = async () => {
    try {
      
      const fetchPay = await fetch(url)
    const resp = await fetchPay.json()
    setUser(resp)
    } catch (error) {
      console.log(error)
    }
    
  }
  fetchData()
},[])
if(!user){
  return <h2>Loading...</h2>
}
const {avatar_url,name,company,bio} = user

return (
  <div>
  <img src={avatar_url} alt= {name} />
<h1>{name}</h1>
<h3>{company}</h3>
<p>{bio}</p>
  </div>
)
// const handleClick = ()=>{
//   setCount(count + 1)
// }


// return (
//   <div>
//     <h2>you clicked me {count} times</h2>
//     <button onClick={()=>setCount(count + 1)}>click me</button>
//   </div>
// )
}
export default useBasic
