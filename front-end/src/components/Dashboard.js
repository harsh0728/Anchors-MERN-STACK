import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get('/api/internships');
        setInternships(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInternships();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {internships.map((internship) => (
          <li key={internship.id}>
            <strong>{internship.role}</strong> - {internship.company} ({internship.stipend})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
