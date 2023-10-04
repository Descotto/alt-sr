import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');



function Enterprise(props) {
  const { handleChange,
    renderDropdownOptions,
    openModal,
    setModalDisplay } = props;

  const displayData = props.enterpriseData.map((i, idx) => {
    return (
      <div key={idx} >
        <p onChange={handleChange}>{i.description} - <select id={i.itemCode} name={i.description}>
          {renderDropdownOptions(10)}
        </select></p>

      </div>
    )
  })

  function setDisplay() {
    setModalDisplay(<div className='enterprise items-container'>
      <h2 className='items-title'>Enterprise</h2>
      <div className='items-list'>

        {displayData}

      </div>
    </div>)
    openModal()
  }

  return (
    <div>

<button className="btn btn-secondary custom-width btn-color2" onClick={setDisplay}>
        Enterprise <span className="plus-sign">+</span>
      </button>     </div>

  );
}

export default Enterprise;
