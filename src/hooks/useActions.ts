import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {citiesActions} from "../store/reducers/cities";

export const useActions = () => {
    const dispatch = useDispatch()
    return {
        citiesActions: bindActionCreators({...citiesActions}, dispatch)
    }
}