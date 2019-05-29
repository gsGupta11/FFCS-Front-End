import React from 'react';

class Search extends React.Component{

state={
     code:null,
     key:null
    }


handleChange=(e)=>{
       this.setState({
           code:e.target.value,
           key:Math.random()
       })
}

handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addCourse(this.state);

}

handleClick=(e)=>{
   console.log(e.target);
}

render() {

  return (
  
   <div id ="search-bar">

        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} placeholder="Search By Course Code/ Title / Slot" type="text" id="courseselection" />
        </form>
        <a href="#"><i class="fas fa-filter" id="filter" onClick={this.handleClick}><div className="before"></div></i></a>

   </div>

  )

}
}
export default Search;
