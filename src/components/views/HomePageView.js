

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h3>Final Project</h3>
      <Link to={'/employees'} > All Employees </Link>
      <p></p>
      <Link to={'/tasks'} > All Tasks </Link>
      
    </div>
  );    
}




export default HomePageView;
