import {Layout} from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
const {Content,Sider}=Layout;
function NewPost(){
    return(
        <AdminLayout>
           <h1>Create new Post</h1>
           <p>More post ....</p>
        </AdminLayout>
    );
}
export default NewPost;