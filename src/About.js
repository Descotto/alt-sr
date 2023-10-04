import React from 'react';

function About() {
  return (
    <div className='about-container'>
      <h1>About</h1>

      <h3>How to use</h3>

      <div className="howto">

        <ul>
          <li><strong>New Request:</strong> Enter your name and lead's name and click the "Complete" button at the bottom. <br /> Your Request ID will be saved to the clipboard, and the "Show Order" button will take you to the Order tab.</li><br />
          <li><strong>Find by ID:</strong> Enter the order ID in the entry field and click "Search". <br /> This will take you to the Order tab.</li><br />
          <li><strong>Order Tab:</strong> Here you can view and confirm the request made, as well as downloading an excel sheet with the information. <br /> To download the excel, click the "Download Excel". <br /> The excel sheet will save as "Supply_Request_(date it was created).xlsx". <br /> Orders will remain in the database for up to 2 weeks so that this can remain free.</li><br />
        </ul>

      </div>


      <h4>Contact</h4>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/david-escotto/" className="linkedin"><i className="bi bi-linkedin">linkedin</i></a><br />
        <small>David's Email: Davidescotto05@gmail.com</small>

        <br />

        <div className='line'></div>

        <a href="https://www.linkedin.com/in/calvin-moldenhauer/" className="linkedin"><i className="bi bi-linkedin">linkedin</i></a><br />
        <small>Calvin's Email: Calvickauer@gmail.com</small>
        <div className='line'></div>
      </div>

      <footer>
        <small>Created by David Escotto and Calvin Moldenhauer</small>
      </footer>
    </div>
  );
}

export default About;
