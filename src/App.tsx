import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { normalize, schema } from 'normalizr';
import {BusinessAPI} from './api/businessAPI';

async function foo(){
    const businessAPI = new BusinessAPI();
    const temp = await businessAPI.getBusinessByPhone('1415749206022');
  //  const category = new schema.Entity('categories');
  //  const restaurant = new schema.Entity('restaurant', {
   //     categories: [category]
    //});
//    const normalizedData = normalize(temp.data, restaurant);
    console.log('xxxxx');
    console.log(temp);
  //  console.log(normalizedData);
}
foo();

async function baz(){
    console.log(await Promise.resolve('isise async'));
}
baz();
console.log('next one!');
async function App() {
  return (
    <div>
        <p>aaabbb</p>
    </div>
  );
}

export default App;
