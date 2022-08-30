import {Layout} from "antd";
import AdminLayout from "../../components/layout/AdminLayout";
const {Content,Sider}=Layout;
function Admin(){
    return(
        <AdminLayout>
           <h1>This is Admin Layout</h1>
           <p>More Content ....</p>
        </AdminLayout>
    );
}
export default Admin;