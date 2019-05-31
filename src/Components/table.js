import React from 'react';

class Table extends React.Component{
    state={SJT:["","",""],
            TT:["","",""],
            MB:["","",""],
            SMV:["","",""],
            GDN:["","",""]
            }
    handleclick=(e)=>{
        var x=document.getElementById("venues");
        x.className="show";
    };
    handleclickid=(e)=>{
                var data = this.state[e.target.className]
    };
    render(){
        return(
            <div className="slotTable" >
                <button>Lab</button>
                <button>Theory</button> 
                <button>Practicals</button>

                <button className="venue" onClick={this.handleclick}>Venue Filter</button>

                 <div className="hide" id="venues">
                                            <a href="#" id="one" onClick={this.handleclickid} className="SJT">SJT</a>
                                            <a href="#" id="one" className="TT" onClick={this.handleclickid}>TT</a>
                                            <a href="#" id="one" className="MB" onClick={this.handleclickid}>MB</a>
                                            <a href="#" id="one" className="SMV" onClick={this.handleclickid}>SMV</a>
                                            <a href="#" id="one" className="GDN" onClick={this.handleclickid}>GDN</a>    

                </div>

    
            </div>
        )
    }
}

export default Table;