import React,{useEffect, useState} from 'react'
import { alumnos } from '../funciones/funciones'



const Inicio = () => {
   const [alumno, setAlumno] = useState(null)
  useEffect(()=>{
    alumnos(setAlumno)
  },[])

  return (
    
      
    <>
    
     {alumno != null ? (
      alumno.map(alumno => (
        
        <div key={alumno.id}>
                <thead>
    <tr>
      <th scope="col"> <h3>Email </h3></th>
      
      <th scope="col"><h3>Name</h3></th>
      <br></br>
      <th scope="col"><h3>last_name</h3></th>
      <br></br>
      <th scope="col"><h3>icon</h3></th>
      <br></br>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <th scope="row"><h5 href='#'> {alumno.email}  </h5></th>
      <br></br>
      <td><h5 href='#'>  {alumno.first_name}  </h5></td>
      <br></br>
      <td><h5 href='#'>  {alumno.last_name}  </h5></td>
      <br></br>
      <td><img src={alumno.avatar} atl=''  /></td>
      <br></br>
    </tr>
    </tbody>
    
  

          
         

        </div>
      ))
     
     
     ) : ('no hay')}




    </>
    
  )
}


export default Inicio