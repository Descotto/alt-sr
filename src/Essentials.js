import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');



function Essentials(props) {
  const [quantity, setQuantity] = useState(0);
  const { handleChange,
    renderDropdownOptions,
    openModal,
    setModalDisplay } = props;

    function handleQuantity(quantity) {
      setQuantity(quantity);
    }
    

  const displayData = props.essentialData.map((i, idx) => {
    return (
      <div key={idx} >
        <p id={i.itemCode} name={i.description} >{i.description}
       
        <button className="circular-button" onClick={() => handleQuantity(quantity - 1)}>
        -
      </button>
      <span>{quantity}</span>
      <button className="circular-button" onClick={() => handleQuantity(quantity + 1)}>
        +
      </button>
    
        </p>

      </div>
    )
  })

  function setDisplay() {
    setModalDisplay(<div className='Essentials items-container'>
      <h2 className='items-title'>Fiber Essentials</h2>

      <div className='items-list'>

        {displayData}

      </div>
    </div>)
    openModal()
  }



  return (


    <div>
  <button className="btn btn-secondary custom-width btn-color2" onClick={setDisplay}>
        Essentials <span className="plus-sign">+</span>
      </button> 
    </div>
  );
}

export default Essentials;
