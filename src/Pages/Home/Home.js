import './Home.css'
import Navbar from '../../components/NavBar/Navbar';

function Home() {
    return (
        <div className='container-fluid'>
            <Navbar />
            <div className="row mt-5">
                <div className="col">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">User Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">User Address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Helath Details</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">User Age</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div>
                        <button type="button" className="btn btn-success">Save Details</button>
                    </div>
                </div>
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;