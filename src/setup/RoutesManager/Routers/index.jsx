import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../Main";
import { HomePage } from "../../../pages";

const Routers = () => {
    const navigate = useNavigate()

    return (
        <Routes navigate={navigate}>
            <Route path="/" element={<Main />}>
                <Route exact path="/" element={<HomePage />}/>
            </Route>
        </Routes>
    )

}

export default Routers;