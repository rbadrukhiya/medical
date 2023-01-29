import Copyright from "./copyright"
import Footer from "./footer"
import Header from "./header"
import Health from "./healthcare"
import Subscribe from "./subscribe"
import Pagination from 'react-bootstrap/Pagination';


function Department_grid()
{
    return(
        <>
        <Header/>
        <Health/>
        <div className="row justify-content-center mt-5 mb-5">
            <div className="col-auto">
        <Pagination>
      <Pagination.Item><a href="#">1</a></Pagination.Item>
      <Pagination.Item><a href="#">2</a></Pagination.Item>
      <Pagination.Last />
    </Pagination>
            </div>
        </div>
        <Subscribe/>
        <Footer/>
        <Copyright/>
        </>
    )
}
export default Department_grid  