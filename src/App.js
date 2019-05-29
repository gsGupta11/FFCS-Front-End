import React from 'react';
import Search from './Components/searchBar';
import Course from './Components/course.js';
class App extends React.Component{

state={
  array:[{code:"Course Code",key:1,code2:"Course Title"}],i:0
}

addCourse=(course)=>{
  course.code2="undefined";
  let a=[...this.state.array,course];
       this.setState({
          array: a  
  });
}

render() 
  {
    console.log(this.state.array);
  return (



   <div>
     
        <Search addCourse={this.addCourse}/>

        <Course array={this.state.array}/>
       
   </div>

  )
}
}
export default App;
