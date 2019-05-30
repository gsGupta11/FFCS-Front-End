import React from 'react';
import Search from './Components/searchBar';
import Course from './Components/course.js';
import Table from './Components/table';
import Time from './Components/time-table';
import CourseTable from './Components/coursetable';
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
  return (



   <div>
     
        <Search addCourse={this.addCourse}/>

        <Course array={this.state.array}/>


        <Table/>

        <Time/>

        <CourseTable/>    
   </div>

  )
}
}
export default App;
