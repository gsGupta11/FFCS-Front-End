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

    return(

        
        <div className="Complete">

          <div className="courselist">
              <table className="courseTable" >
                    
            {tableHeaders}
              {courselist}
                   
            
              </table>

              </div>
              </div>
    );
}



export default Course;




