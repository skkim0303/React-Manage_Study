import React, {Component} from "react";
import Customer from "./components/Customer.js"
import './App.css';


const customer = [{
  "id" : "1",
  "image" : "https://placeimg.com/80/80/1",
  "name" : "황장군",
  "birth" : "123456",
  "gender" : "남자",
  "job" : "대학생"
},
{
  "id" : "2",
  "image" : "https://placeimg.com/80/80/2",
  "name" : "우뢰매",
  "birth" : "555555",
  "gender" : "남자",
  "job" : "군인"
},
{
  "id" : "3",
  "image" : "https://placeimg.com/80/80/3",
  "name" : "오솔길",
  "birth" : "222222",
  "gender" : "여자",
  "job" : "의사"
}
]

class App extends Component {
  render() {
    return(
      <div>
        {customer.map(a => {
          return( <Customer 
            id={a.id}
            image={a.image}
            name={a.name}
            birth={a.birth}
            gender={a.gender}
            job={a.job} />)})
        }
      </div>
    );
  } 
}

export default App;
