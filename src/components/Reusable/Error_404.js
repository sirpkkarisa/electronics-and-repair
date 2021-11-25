import { Warning } from "@mui/icons-material"
import Header from "../Public/Header"


const Error_404 = () => {
    return (
        <div>
            <Header/>
           <div className='Body'><h1 style={{textAlign:'center',color:'#f00000'}}><Warning/>Page Not Found </h1></div>
        </div>
    )
}

export default Error_404
