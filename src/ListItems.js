import React from 'react';

class ListItems extends React.Component{
  
  render(){
    const miListita = this.props.pasameLaLista;
    //console.log(miListita);
    return(
    <div>
        <p className="items">Items</p>
        <ol className="item-list">
          {miListita && miListita.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
    </div>
    )
  }
}

export default ListItems;