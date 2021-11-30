import AdminBody from "./AdminBody"
import Header from "./AdminHeader"

const Admin = ({data,parts, onSubmit, onAddElectronics, onAddServices, onAddParts}) => {
    return (
        <div>
           <Header/>
           <AdminBody data={data} 
                      parts={parts} 
                      onSubmit={onSubmit} 
                      onAddElectronics={onAddElectronics} 
                      onAddServices={onAddServices}
                      onAddParts={onAddParts}
                      />
        </div>
    )
}

export default Admin
