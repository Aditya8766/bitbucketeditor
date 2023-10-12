import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RepositoryContent({ token= 'HYVxESHfkR2Q4R4VjnJZC3p66YwxhLyA' }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchRepositoryContent = async () => {
      try {
        const response = await axios.get(
          'https://api.bitbucket.org/2.0/repositories/{Aditya.Bhosale}/{DemoAngularApp}/src/master/{README.md}',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setContent(response.data.values);
      } catch (error) {
        console.error('Error fetching repository content:', error);
      }
    };

    fetchRepositoryContent();
  }, [token]);

  return (
    <div>
      <h2>Repository Content</h2>
      <ul>
        {content.map((item) => (
          <li key={item.path}>{item.path}</li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryContent;
