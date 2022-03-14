import React, { Component } from 'react'

export default class Back extends Component {
  render() {
    return (
      <>
         <div className="body">
         <div className="heading">FEEDBACK PAGE</div>
             <br /><br />

            <div className="feedback_container">
             {this.props.feedback.map((item,index)=>{
                return(
               <div key={index} className='inbox' >
               Name : {item.name} || Department :  {item.dept} || Rating {item.rating}
      
              </div>
                ) 
                })}
            </div> 
            <div>
                <button onClick={this.props.toggleFunc} className='btn'>CLICK TO GO BACK</button>
            </div>
            </div>
      </>
    )
  }
}