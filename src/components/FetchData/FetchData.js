import React, {useEffect, useState} from 'react';
import { FetchDataWrapper } from './FetchData.styled';
import axios from 'axios';

const FetchData = () => {
 const array = [10, 9, 8, 7, 6];
 const [data, setData] = useState(null);
 const openUrl = "https://jsonplaceholder.typicode.com/users";
 const newArray = array.map(value => value = value - 3);
 console.log(...newArray);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const resp = await axios
        .get(openUrl);
    setData(resp);
   } catch (e) {
    console.error(e);
   }
  };
  fetchData();
 }, []);

 useEffect(() => {
  console.log(data); // Log the data value when it changes
 }, [data]);

 return (
     <FetchDataWrapper>
      <h1>{newArray}</h1>
      {data ? (
          <div>
           <p>Name of the actor: {data.data[1].name}</p>
           <p>{data.data.length}</p>
           <p>Data loaded from {openUrl}</p>
          </div>
      ) : (
          <p>Loading...</p>
      )}
    </FetchDataWrapper>
 );
}

export default FetchData;
