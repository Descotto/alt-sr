import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return (

        <div className='home-container'>
            {/* <h1 className='home-title'>Supply Request</h1> */}

            <h4 className='home-subtitle'>News</h4>
            <div className='news-container'>
                <ul className='news-list'>
                    <li className='news-item'>All requests will now be stored for 2 weeks before deletion.</li>
                    <li className='news-item'>You are now able to download an excel sheet with your selection upon making a request.</li>
                    <li className='news-item'>Added a Find option to look up past orders.</li>
                    <li className='news-item'>Updated list of items to reflect the newest list.</li>
                    <li className='news-item new-item'><strong>New:</strong> All categories are now collapsable for easier access.</li>
                    <li className='news-item'><strong>Notice:</strong> If there are any bugs, please reach out.</li>

                </ul>
            </div>
        </div>
    );
}

export default Home;
