import AdminPost from "../DailyNote/AdminPost";
import EditNote from "../DailyNote/EditNote";
import GetNote from "../DailyNote/GetNote";
import { PostNote } from "../Note_Creator/PostNote";



function App() {
    
    
    return (
        <div>
            <AdminPost/>
            <GetNote/>
            {/* <PostNote/> */}
        </div>
    );
}

export default App;