import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { PRIVATE_PATH, PUBLIC_PATH } from "../Constant/path"


const AdminRoute = ({children}) => {
    const {userInfo} = useSelector((s) => s.auth)

    if(!userInfo) {
        return <Navigate to={PUBLIC_PATH.SIGN_IN}/>
    } 

    if(userInfo.maLoaiNguoiDung !== 'QuanTri') {
        return <Navigate to={PRIVATE_PATH.ADMIN}/>
    }
    
    return children
}