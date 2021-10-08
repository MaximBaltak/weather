import {connect} from "react-redux";
import MainPage from "./MainPage";

const mapStateToProps=state=>{
    return{
        list: state.mainPage.listRussiaCity
    }
}

 const MainPageContainer= connect(mapStateToProps,null)(MainPage)
export default MainPageContainer
