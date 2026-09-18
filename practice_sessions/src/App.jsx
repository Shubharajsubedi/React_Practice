import Delete from "../CRUD/Delete";
import Get from "../CRUD/Get";
import Patch from "../CRUD/Patch";
import Post from "../CRUD/Post";
import PostAdmin from "../CRUD/PostAdmin";
import Put from "../CRUD/Put";


function App() {
    return (
        <div>
            <Post/>
            <Get/>
            <Put/>
            <Patch/>
            <Delete/>
            <PostAdmin/>
        </div>
    );
}

export default App;