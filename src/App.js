import React,{useState } from "react";
import Admin from "./components/Admin/Admin";
import Home from './components/Public/Home';
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Electronics from './components/Public/Electronics';
import Reviews from './components/Public/Reviews'
import Services from './components/Public/Services';
import Error404 from './components/Reusable/Error_404';
import Login from "./components/Reusable/Login";
import RegisterUser from "./components/Admin/RegisterUser";

const App =()=> {

  const electronics = [
    { id:1,title: 'iPhone 13',cost: 1999,QOH: 10,description:'This iPhone 13 Pro Max. It comes with several features such as 64MP back camera,256GB storage and 16GB RAM',
      imgURL:'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {id:2,title: 'Samsung s20',cost: 1200,QOH: 10,description:'It is a water proof phone. It comes with several features such as 64MP back camera,256GB storage and 16GB RAM',
      imgURL:'https://images.pexels.com/photos/4048419/pexels-photo-4048419.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {id:3,title: 'Oppo Reno 6',cost: 500,QOH: 10,description:'Oppo Reno 6 5G just have smaller screen about 7mm other specs of Note 11 pro D920 120Hz 3.5mm jack 108Mp S5KHM2 5160Mah battery Stereo Speaker Infrared Port Ufs',
      imgURL:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWjoCiUoMwsV6apL65ucy5gLwPjKb4tXAvvsr0Dhnneg0-WBBJBanb0N8cNL16HFdWCbJnFM2iCqc&usqp=CAc'
    },
    {id:4,title: 'Oppo A83',cost: 200,QOH: 3,description:'This iPhone 13 Pro Max. It comes with several features such as 64MP back camera,256GB storage and 16GB RAM',
      imgURL:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWjoCiUoMwsV6apL65ucy5gLwPjKb4tXAvvsr0Dhnneg0-WBBJBanb0N8cNL16HFdWCbJnFM2iCqc&usqp=CAc'
    },
    {id:5,title: 'Macbook Pro',cost: 2199,QOH: 10,description:'New. 8-Core CPU 14-Core GPU 16GB Unified Memory 512GB SSD Storage¹ · 16-core Neural Engine · 14-inch Liquid Retina XDR display · Three Thunderbolt 4 ports, HDMI',
      imgURL:'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {id:6,title: 'Probook 6460b',cost: 1999,QOH: 10,description:'Tailored for business. Optimized for Genuine Windows 7 Professional, this configurable notebook features a 14-inch diagonal display and UMA or discrete ',
      imgURL:'https://images.pexels.com/photos/9908666/pexels-photo-9908666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {id:7,title: 'iMac',cost: 2000,QOH: 2,description:"iMac — beautiful, intuitive all-in-one desktops with incredible processors, a Retina display, and the world's most advanced desktop operating system",
      imgURL:'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {id:8,title: 'DW35 Pro',cost: 50,QOH: 7,description:' The Best Digital Watches for Every Taste.',
      imgURL:'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {id:9,title: 'Vinyl Cutter',cost: 1000,QOH: 0,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable. ',
      imgURL:'https://image.shutterstock.com/image-photo/vinyl-cutter-plotter-machine-head-260nw-1340504738.jpg'
    },
    {id:10,title: 'iPhone 10',cost: 1000,QOH: 0,description:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM',
      imgURL:'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
  ]

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

  const services = [
    {id: 1,reviews:1, title:'title 1',charge:20,description:"iMac — beautiful, intuitive all-in-one desktops with incredible processors, a Retina display, and the world's most advanced desktop operating system"},
    {id: 2,reviews:3, title:'title 2',charge:10,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 3,reviews:1, title:'title 3',charge:15,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 4,reviews:1, title:'title 4',charge:20,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 5,reviews:1, title:'title 5',charge:10,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 6,reviews:1, title:'title 6',charge:25,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 7,reviews:1, title:'title 7',charge:21,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 8,reviews:1, title:'title 8',charge:10,description:'A vinyl cutter is an entry level machine for making signs. Computer designed vector files with patterns and letters are directly cut on the roll of vinyl which is mounted and fed into the vinyl cutter through USB or serial cable.'},
    {id: 9,reviews:1, title:'title 9',charge:11,description:'The Best Digital Watches for Every Taste.'},
    {id: 10,reviews:5, title:'title 10',charge:20,description:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'}
  ]

  const reviews = [
    {id:1,date:'01/01/2020',postedBy:'John Doe', rating:0, comment:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'},
    {id:2,date:'07/01/2021',postedBy:'John Doe', rating:3, comment:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'},
    {id:3,date:'01/01/2020',postedBy:'John Doe', rating:4, comment:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'},
    {id:4,date:'04/05/2021',postedBy:'John Doe', rating:5, comment:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'},
    {id:5,date:'01/09/2020',postedBy:'John Doe', rating:5, comment:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'},
    {id:6,date:'11/11/2021',postedBy:'John Doe', rating:5, comment:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'},
    {id:7,date:'01/01/2021',postedBy:'John Doe', rating:4, comment:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'},
    {id:8,date:'02/02/2020',postedBy:'John Doe', rating:4, comment:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'},
    {id:9,date:'02/02/2021',postedBy:'John Doe', rating:5, comment:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'},
    {id:10,date:'04/04/2021',postedBy:'John Doe', rating:1, comment:'It comes with several features such as 64MP back camera,256GB storage and 16GB RAM'}  
  ]
  const [isLoggedIn, setLogIn] = useState(true)
  const [ repairs, setRepairs ] = useState(repairsObj)
  // const [isAdmin, setIsAdmin] = useState(false)
  const onSubmit = (submitted)=> {
      const { 
              city, 
              description, 
              dmodel, 
              dnum, 
              dtype, 
              fname, 
              lname, 
              id,
              phone,
              state,
              street,
              zip
            } = submitted;

    const rid = Math.floor(Math.random()*10000)+1;
    setRepairs([...repairs, {id: rid, description, title:'title N', reviews:0, charge:30, completed:false}])   
    
  }
  console.log(repairs)

  return (
    <BrowserRouter>
      <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='' element={<Electronics data={electronics}/>}/>
          <Route path='electronics' element={<Electronics data={electronics}/>}/>
          <Route path='services' element={<Services data={services}/>}/>
          <Route path='reviews' element={<Reviews data={reviews}/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/portal' element={isLoggedIn? <Admin data={repairs} onSubmit={onSubmit}/>: <Navigate to='/login' element={<Login/>}/>}/>
        <Route path='/register' element={<RegisterUser/>}/>
        <Route path='/*' element={<Error404/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
