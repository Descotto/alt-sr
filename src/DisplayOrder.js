import React from 'react';
import './App.css'
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';





function DisplayOrder(props) {

    let name = props.order.order.name;
    let lead = props.order.order.lead;
    let date = props.order.order.date.slice(0, props.order.order.date.indexOf('T'));
    let items = props.order.order.items;
    let orderId = props.order.order._id;


    //============================FULL





    const handleExport = () => {

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('New Sheet', {
            pageSetup: { paperSize: 9, orientation: 'landscape' }
        });



        const preset = [
            ["", "Sonic Telecom, LLC", "", ""],
            ["", "Supply Request Sheet - Field Installation Warehouse", "", ""],
            ["", "", "", ""],
            ["Lead's Name:", lead, "Shipping", ""],
            ["", "", "Request", ""],
            ["Tech's Name/Ship-To:", name, "", ""],
            ["Today's Date:", date, "Box Count", "Ship Cost"],
            ["", "", "", ""],
            ["Item Code:", "Description:", "Requested:", "Pulled:"],
            ["", "", "", ""]


        ];
        const preset2 = [
            ["", "", "", ""],
            ["", "Pulled By:__________________ Date:____________   ", "", ""],
            ["Picked up By:__________________", "Signature:______________________ Date:_______", "", ""]
        ];

        let pull = items.map((i, idx) => {
            return (
                [i.itemCode, i.description, i.requested, ""]
            )
        })

        let selection = preset.concat(pull);
        let data = selection.concat(preset2);



        data.forEach((row) => {
            worksheet.addRow(row);
        });

        //========== STYLES ========

        //====fonts
        worksheet.getColumn('A').font = {
            name: 'Calibri (Body)',
            color: { argb: '00000000' },
            family: 2,
            size: 14,
            italic: true
        };

        worksheet.getColumn('B').font = {
            name: 'Calibri (Body)',
            color: { argb: '00000000' },
            family: 2,
            size: 14,
            italic: true
        };

        worksheet.getColumn('C').font = {
            name: 'Calibri (Body)',
            color: { argb: '00000000' },
            family: 2,
            size: 14,
            italic: true
        };
        worksheet.getColumn('D').font = {
            name: 'Calibri (Body)',
            color: { argb: '00000000' },
            family: 2,
            size: 14,
            italic: true
        };

        worksheet.getRow('1').font = { size: 24, bold: true };
        worksheet.getRow('2').font = { size: 16 };
        worksheet.getRow('9').font = { size: 14, bold: true };
        worksheet.getCell('C4').font = { bold: true };
        worksheet.getCell('C5').font = { bold: true };
        worksheet.getCell('C7').font = { bold: true };
        worksheet.getCell('D7').font = { bold: true };

        //=============aligment
        worksheet.getColumn('A').alignment = { vertical: 'top', horizontal: 'left' };
        worksheet.getColumn('B').alignment = { vertical: 'top', horizontal: 'left' };
        worksheet.getColumn('C').alignment = { vertical: 'center', horizontal: 'center' };
        worksheet.getColumn('D').alignment = { vertical: 'center', horizontal: 'center' };
        worksheet.getRow('1').alignment = { vertical: 'center', horizontal: 'center' };
        worksheet.getRow('2').alignment = { vertical: 'center', horizontal: 'center' };
        worksheet.getRow('8').alignment = { vertical: 'center', horizontal: 'center' };

        //===========Re-size
        worksheet.getColumn('A').width = 27;
        worksheet.getColumn('B').width = 71;
        worksheet.getColumn('C').width = 15;
        worksheet.getColumn('D').width = 15;
        worksheet.getRow('1').height = 25;
        worksheet.getRow('2').height = 25;
        worksheet.getRow('8').height = 20;

        //==========Colors and borders
        worksheet.getColumn('A').border = {
            top: { style: 'thin', color: { argb: '00000000' } },
            left: { style: 'thin', color: { argb: '00000000' } },
            bottom: { style: 'thin', color: { argb: '00000000' } },
            right: { style: 'thin', color: { argb: '00000000' } }
        };
        worksheet.getColumn('B').border = {
            top: { style: 'thin', color: { argb: '00000000' } },
            left: { style: 'thin', color: { argb: '00000000' } },
            bottom: { style: 'thin', color: { argb: '00000000' } },
            right: { style: 'thin', color: { argb: '00000000' } }
        };
        worksheet.getColumn('C').border = {
            top: { style: 'thin', color: { argb: '00000000' } },
            left: { style: 'thin', color: { argb: '00000000' } },
            bottom: { style: 'thin', color: { argb: '00000000' } },
            right: { style: 'thin', color: { argb: '00000000' } }
        };
        worksheet.getColumn('D').border = {
            top: { style: 'thin', color: { argb: '00000000' } },
            left: { style: 'thin', color: { argb: '00000000' } },
            bottom: { style: 'thin', color: { argb: '00000000' } },
            right: { style: 'thin', color: { argb: '00000000' } }
        };
        //====colors
        let color = 'BBBBBB'
        worksheet.eachRow((row) => {
            row.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: color },
            };
            if (color === 'FFFFFF') {
                color = 'BBBBBB'
            } else if (color === 'BBBBBB') {
                color = 'FFFFFF'
            }

            //===set row colors

            worksheet.getRow('1').fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFFF' },
            };
            worksheet.getRow('3').fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFFF' },
            };
            worksheet.getRow('5').fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFFF' },
            };
            worksheet.getRow('7').fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFFF' },
            };
            worksheet.getRow('9').fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFFF' },
            };

            //==specific cells
            worksheet.getCell('C4').fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'BBBBBB' },
            };
            worksheet.getCell('C5').fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'BBBBBB' },
            };
            worksheet.getCell('C7').fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'BBBBBB' },
            };
            worksheet.getCell('D7').fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'BBBBBB' },
            };



        })

        //========== STYLES ========

        workbook.xlsx.writeBuffer().then((buffer) => {
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, `supply_request_${date}.xlsx`);
        });
    };





    //======================
    let orderBoard = items.map((i, idx) => {
        return (
            <tr key={idx} className='list'>
                <td>
                    {i.itemCode}
                </td>
                <td>
                    {i.description}
                </td>
                <td className='th'>
                    {i.requested}
                </td>


            </tr>
        )
    })




    return (
        <div className='display-order-container'>
            <h4>Order number: <small className='order-number'>{orderId}</small></h4>
            <p>Name: <strong>{name}</strong></p>
            <p>Lead: <strong>{lead}</strong></p>
            <p>Date: <strong>{date}</strong></p>
            <button type="button" id='download-btn' className="btn btn-success download-btn" onClick={handleExport}>Download Excel</button>
            <table className='order-table'>
                <thead>
                    <tr>
                        <th width='30%'>Item Code</th>
                        <th width='30%'>Description</th>
                        <th className='table-header' width='30%'>Requested</th>
                    </tr>
                </thead>
                <tbody>
                    {orderBoard}
                </tbody>
            </table>
        </div>
    )
}



export default DisplayOrder;