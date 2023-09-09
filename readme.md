<h1>Kanban Board Task Management Application</h1>

<h2>Kanban-TM</h2>

<h3>Table of Content:</h3>
<ul>
  <li>Overview</li>
  <li>Key Features</li>
  <li>Getting Started
    <ul>
      <li>Prerequisites</li>
      <li>Installation</li>
    </ul>
  </li>

  <li>Usage</li>
  <li>Technologies Used</li>
  <li>Email and Password for deployed Application Testing</li>
  <li>Snapshots of the live application to showcase the application interface</li>
</ul>

<h3>Overview</h3>
<p>
Kanban-TM is a userfriendly Kanban board Task Management Application designed to streamline the users workflow and enchance
team collaboration. Whether you're a software development team, a marketing department, or an individual managing personal projects
, this application provides an intuitive and visual way to organize, prioritize and track tasks effortlessly. With Kanban-TM
, you can create tasks and populate the boards with them and move the tasks across columns to reflect their progress. Visualizing your 
work this way makes it easy to identify bottlenecks, moniter task statuses, and ensure nothing falls through the cracks. 

<h3>Key features of Kanban-TM include:</h3>
<ol>
  <li><h5>Kanban Board: </h5>Populate the Todo, Doing and Done boards to manage different projects or workflows.</li>
  <li><h5>Task Cards: </h5>Each Task is represented as a card with details such as title, description, due date and due time.</li>
  <li><h5>Drag and Drop: </h5>Move the tasks between different columns to update their status.</li>
  <li><h5>User-friendly Interface: </h5>An intuitive and reponsive design ensures a smooth user experience across devices.</li>
</ol>
</p>

<h3>Getting Started</h3>
<p>Follow these steps to set up and run Kanban-TM on your local machine:</p>
<h4>Prerequisites</h4>
<p>Before you begin, ensure you have the following software installed:</p>
<p>Node.js:  Make sure you have Node.js installed on your system. You can download it from the official website.</p>
<p>MongoDB:  Install MongoDB and ensure it's running locally or have a connection to a MongoDB database.</p>

<h4>Installation</h4>
<ol>
  <li>
<p>Clone the repository:</p>

  ```js
  git clone https://github.com/aniket2003/Kanban-Based-TaskManagement-App.git
```
  </li>

  <li>
    <p>Navigate to the server directory and install server dependencies:</p>
    
   ```js
   cd Kanban-Based-TaskManagement-App/server
   npm install
```
  </li>

  <li>
    <p>Create a .env file in the server directory with the following environment variables:</p>
    
  ```js
PORT = 5000
MONGO_URL = your_mongodb_connection_uri       
```
  </li>

  <li>
    <p>Start the server: </p>
    
  ```js
    npm start
  ```
<p>The server should now be running on port 5000</p>
  </li>

  <li>
    <p>Open a new terminal window, navigate to the client directory, and install client dependencies:</p>

```js
 cd Kanban-Based-TaskManagement-App/client
 npm install
```
  </li>

  <li>
    <p>In the utils.APIRoute.js change the host to http://localhost:5000</p>
  </li>

  <li>
    <p>Start the client: </p>

   ```js
    npm start
   ```

<p> The client now should be running at http://localhost:3000</p>
  </li>

</ol>



<h3>Usage</h3>
<p>
Once the application is running, you can start managing your tasks with ease. Create tasks, move tasks between columns and enjoy the benefits of visual task management with Kanban-TM 
</p>


<h3>Technologies Used</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>React.js</li>
  <li>MongoDB</li>
</ul>


<h3>Email and Password for deployed Application Testing</h3>

<p>Email: aniket1234@gmail.com</p>
<p>Password: Aniket123</p>
<p>Username: Aniket007</p>


