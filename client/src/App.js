import React,{useState, useEffect } from "react";
import Admin from "./components/Admin/Admin";
import Home from './components/Public/Home';
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Electronics from './components/Public/Electronics';
import Reviews from './components/Public/Reviews'
import Services from './components/Public/Services';
import Error404 from './components/Reusable/Error_404';
import Login from "./components/Reusable/Login";
// import RegisterUser from "./components/Admin/RegisterUser";

const App =()=> {
  const [ devices, setDevices ] = useState([])
  const [ services, setServices ] = useState([])
  const [ reviews, setReviews ] = useState([])
  const [ parts, setParts ] = useState([])

  useEffect(() => {
    const fetchDevices = async ()=>{
      try {
          const res = await fetch('/api/electronics-and-repairs/devices');
          const data = await res.json()
          setDevices(data.devices)
      } catch (error){
        console.log(error)
      }
    }

    const fetchServices = async () => {
    try {
        const res = await fetch('/api/electronics-and-repairs/services');
        const data = await res.json()
        setServices(data.services)
      } catch (error){
        console.log(error)
      }
    }

    const fetchReviews = async () => {
      try {
          const res = await fetch('/api/electronics-and-repairs/reviews');
          const data = await res.json()

          setReviews(data.reviews)
        } catch (error){
          console.log(error)
        }
      }

      const fetchParts = async () => {
        try {
            const res = await fetch('/api/electronics-and-repairs/parts');
            const data = await res.json()
  
            setParts(data.parts)
          } catch (error){
            console.log(error)
          }
        }
    fetchDevices();
    fetchServices();
    fetchReviews();
    fetchParts();
  }, [])

  // const postParts = async () => {
    
  // }
  const repairsObj = [
    {id: 1,reviews:1,completed:false, title:'title 1',charge:20,description:"iMac — beautiful, intuitive all-in-one desktops with incredible processors, a Retina display, and the world's most advanced desktop operating system"},
    {id: 2,reviews:3,completed:false, title:'title 2',charge:10,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 3,reviews:1,completed:true, title:'title 3',charge:15,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 4,reviews:1,completed:true, title:'title 4',charge:20,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 5,reviews:1,completed:false, title:'title 5',charge:10,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 6,reviews:1,completed:true, title:'title 6',charge:25,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 7,reviews:1,completed:false, title:'title 7',charge:21,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 8,reviews:1,completed:true, title:'title 8',charge:10,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 9,reviews:1,completed:false, title:'title 9',charge:11,description:'The Best Digital Watches for Every Taste.'},
    {id: 10,reviews:5,completed:true, title:'title 10',charge:20,description:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'}
  ]


  const [isLoggedIn, setLogIn] = useState(true)
  const [ repairs, setRepairs ] = useState(repairsObj)
  

 
  // const [isAdmin, setIsAdmin] = useState(false)
  const onSubmit = (submitted)=> {
      const { 
              description, 
            } = submitted;

    const rid = Math.floor(Math.random()*10000)+1;
    setRepairs([...repairs, {id: rid, description, title:'title N', reviews:0, charge:30, completed:false}])   
    
  }

  const onAddElectronics = async (device) => {
    try {
      const res = await fetch('/api/electronics-and-repairs/devices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(device)
      });
      const data = await res.json()
      setDevices([data.device,...devices])

    } catch( error) {
      console.log(error)
    }
  }
  
  const onSearchElectronics = (search) => {
    const returned = devices.filter(item=> item.title.toLowerCase()
                                .indexOf(search.toLowerCase()) !== -1 || item.description.toLowerCase()
                                .indexOf(search.toLowerCase()) !== -1)
    setDevices(returned)
  }

  const onAddServices = async (service) => {
    try {
      const res = await fetch('/api/electronics-and-repairs/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(service)
      });

      const data = await res.json()
      setReviews([data.service,...services])

    } catch( error) {
      console.log(error)
    }
  }

  const onAddReview =async (review) => {
    try {
      const res = await fetch('/api/electronics-and-repairs/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      });
      const data = await res.json()
      setReviews([data.review,...reviews])

    } catch( error) {
      console.log(error)
    }
  }

  const onAddParts = async (part) => {
      try {
        const res = await fetch('/api/electronics-and-repairs/parts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(part)
        });
        const data = await res.json()
        setParts([data.part,...parts])
      } catch( error) {
        console.log(error)
      }
  }

  return (
    <BrowserRouter>
      <div className='App'>
      <Routes>
        <Route 
          path='/' 
          element={<Home onAddReview={onAddReview} onSearchElectronics={onSearchElectronics}/>}>
          <Route 
            path='' 
            element={<Electronics 
                        data={devices}/>}/>
          <Route 
            path='electronics' 
            element={<Electronics 
            data={devices}/>}/>
          <Route 
            path='services' 
            element={<Services 
            data={services}/>}/>
          <Route 
            path='reviews' 
            element={<Reviews 
            data={reviews}/>}/>
        </Route>
        <Route 
          path='/login' 
          element={<Login/>}/>
        <Route 
          path='/portal' 
          element={isLoggedIn? <Admin 
                                  data={repairs} 
                                  parts ={parts}
                                  onSubmit={onSubmit}
                                  onAddElectronics={onAddElectronics}
                                  onAddServices={onAddServices}
                                  onAddParts={onAddParts}
                                  />: <Navigate 
                                                            to='/login' 
                                                            element={<Login/>}/>}/>
        {/* <Route 
          path='/register' 
          element={<RegisterUser/>}/> */}
        <Route 
          path='/*' 
          element={<Error404/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
