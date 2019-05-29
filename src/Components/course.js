import React from 'react';

const Course = ({array})=>{

    var tableHeaders= array.slice(0,1).map(value=>{
        return(
            <tr>
                <th>{value.code}</th>
                <th>{value.code2}</th>
            </tr>
        )
    })
    
    var courselist =  array.slice(1).map(value=>{
             return(
                        <tr className="courses" key={value.key}>
                    <td>{value.code}</td>
                    <td>{value.code2}</td>
                        </tr>
               
                 )
    })


    // console.log(array); 
    return(

        

          <div className="courselist">
              <table className="courseTable" >
                    
            {tableHeaders}
              {courselist}
                   
            
              </table>

              </div>
    );
}



export default Course;




// import React from 'react'

// const Ninjas = ({ninjas, deleteNinja}) => {
//   return (
//     <div className="ninja-list">
//       { 
//         ninjas.map(ninja => {
//           return (
//             <div className="ninja" key={ninja.id}>
//               <div>Name: { ninja.name }</div>
//               <div>Age: { ninja.age }</div>
//               <div>Belt: { ninja.belt }</div>
//               <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
//               <hr />
//             </div>
//           )
//         })
//       }
//     </div>
//   );
// }

// export default Ninjas