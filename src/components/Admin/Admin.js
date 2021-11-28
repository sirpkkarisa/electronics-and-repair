import AdminBody from "./AdminBody"
import Header from "./AdminHeader"

const Admin = ({data, onSubmit}) => {
    return (
        <div>
           <Header/>
           <AdminBody data={data} onSubmit={onSubmit}/>
        </div>
    )
}

export default Admin
