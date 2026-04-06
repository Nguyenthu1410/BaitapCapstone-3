import { Navigate } from "react-router"
import { PUBLIC_PATH } from "../Constant/path"
import { LOCAL_STORAGE_KEYS } from "../Constant/localStorageKeys"


const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.USER_INFO))

    if (!user) {
        return <Navigate to={PUBLIC_PATH.SIGN_IN} />
    }

    const role = String(user.role || user.maLoaiNguoiDung || "").toUpperCase()
    if (role !== "ADMIN" && role !== "QUANTRI" && role !== "MANAGER") {
        return <Navigate to={PUBLIC_PATH.HOME} />
    }

    return children
}

export default ProtectedRoute