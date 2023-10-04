import React, { useState, useEffect } from 'react';
import './App.css';
import './Alt.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Accessories from './Accessories';
import Brentwood from './Brentwood';
import Copper from './Copper';
import Enterprise from './Enterprise';
import Essentials from './Essentials';
import Modems from './Modems';
import Secondary from './Secondary';
import Tools from './Tools';
import Zips from './Zips';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Request(props) {
    const [order, setOrder] = useState([]);
    const [name, setName] = useState('');
    const [lead, setLead] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isButtonGlowing, setIsButtonGlowing] = useState(false);
    const [modalDisplay, setModalDisplay] = useState('')


    const {
        essentialData,
        secondaryData,
        brentwoodData,
        modemsData,
        ziptiesData,
        wallplatesData,
        copperData,
        enterpriseData,
        toolsData } = props.siteData;



    useEffect(() => {
        // Enable the button only when both name and lead have values
        setIsButtonDisabled(!(name && lead));
    }, [name, lead]);



    useEffect(() => {
        // Start the button glowing effect every 5 seconds
        const interval = setInterval(() => {
            if (!isButtonDisabled) {
                setIsButtonGlowing((prevIsGlowing) => !prevIsGlowing);
            }
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [isButtonDisabled]);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const renderDropdownOptions = (count) => {
        const options = [];
        for (let i = 0; i <= count; i++) {
            options.push(<option value={i} key={i}>{i}</option>);
        }
        return options;
    };




    function handleChange(e) {
        let item = { itemCode: '', description: '', requested: 0 };
        item.itemCode = e.target.id;
        item.description = e.target.name;
        item.requested = e.target.value;
        props.setOrderTable([
            ...props.orderTable,
            { itemCode: item.itemCode, description: item.description, requested: item.requested },
        ]);
        setOrder([...order, `\n${item.description}, count: ${item.requested}`]);
    }

    function handleClick(e) {
        if (props.orderTable.length > 0) {
            let container = document.createElement('div');
            let table = document.createElement('TABLE');
            let info = document.getElementById('info');
            let name = info.name.value.toUpperCase();
            let lead = info.lead.value.toUpperCase();
            let ot = props.orderTable;
            const order = { name: name, lead: lead, items: ot };

            // == AXIOS CALL ===

            axios
                .post(`${REACT_APP_SERVER_URL}request`, order)
                .then((response) => {
                    props.setDisplay(response.data.order);
                    let data = response.data.order;
                    navigator.clipboard.writeText(data);
                })
                .catch((err) => {
                    console.log('error', err);
                });
            // === AXIOS CALL ===

            generateTable(table, props.orderTable);
            generateTableHead(table, props.orderTable);

            container.appendChild(table);
            props.setDisplay(container);
        } else {
            alert('Please make your selection first');
        }
    }

    function generateTableHead(table) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        let th = document.createElement('th');
        let th2 = document.createElement('th');
        let text = document.createTextNode('item');
        let text2 = document.createTextNode('count');
        th.appendChild(text);
        th2.appendChild(text2);
        row.appendChild(th);
        row.appendChild(th2);
    }

    function generateTable(table, data) {
        data.forEach((e) => {
            let row = table.insertRow();

            let cell = row.insertCell();
            let cell2 = row.insertCell();
            let item = document.createTextNode(e.item);
            let count = document.createTextNode(e.count);
            cell.appendChild(item);
            cell2.appendChild(count);
        });
    }

    return (

        <div className="request-page">
            <h1 className='request-title'>New Request Form</h1>

        <div className="App">

            <div>
                <form id="info">
                    <div>
                        <label>Name</label>
                        <br />
                        <input placeholder='Required' type="text" name="name" onChange={(e) => setName(e.target.value)}  className='request-input'/>
                    </div>
                    <div>
                        <label>Lead</label>
                        <br />
                        <input placeholder='Required' type="text" name="lead" onChange={(e) => setLead(e.target.value)} className='request-input'/>
                    </div>
                </form>
                <div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        

            {modalDisplay}

             
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
                


            </div >
            <div className='request-options'>
  <div className='essentials'>
    <br />
    <Essentials setModalDisplay={setModalDisplay} openModal={openModal} essentialData={essentialData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
  </div>

  <div className='secondary'>
    <br />
    <Secondary setModalDisplay={setModalDisplay} openModal={openModal} secondaryData={secondaryData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
  </div>

  <div className='brentwood'>
    <br />
    <Brentwood setModalDisplay={setModalDisplay} openModal={openModal} brentwoodData={brentwoodData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
  </div>

  <div className='modems'>
    <br />
    <Modems setModalDisplay={setModalDisplay} openModal={openModal} modemsData={modemsData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
  </div>

  <div className='zips'>
    <br />
    <Zips setModalDisplay={setModalDisplay} openModal={openModal} ziptiesData={ziptiesData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
  </div>

  <div className='accessories'>
    <br />
    <Accessories setModalDisplay={setModalDisplay} openModal={openModal} wallplatesData={wallplatesData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
  </div>

  <div className='copper'>
    <br />
    <Copper setModalDisplay={setModalDisplay} openModal={openModal} copperData={copperData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
  </div>

  <div className='enterprise'>
    <br />
    <Enterprise setModalDisplay={setModalDisplay} openModal={openModal} enterpriseData={enterpriseData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
  </div>

  <div className='tools'>
    <br />
    <Tools setModalDisplay={setModalDisplay} openModal={openModal} toolsData={toolsData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
  </div>
</div>

<br />

        <div className='request-btn-container'>

            <props.Link to="/display">
                <button
                    type="submit"
                    className={`btn btn-primary complete-order ${isButtonGlowing ? 'glowing' : ''}`}
                    onClick={handleClick}
                    disabled={isButtonDisabled}
                >
                    Complete Order
                </button>

            </props.Link>
        </div>


        </div >
        </div>


    )

}

export default Request;
