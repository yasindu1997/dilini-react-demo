import './Home.css'
import Navbar from '../../components/NavBar/Navbar';
import './Home.css'

function Home() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Suvodya Medical</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link " aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Features</a>
                                <a class="nav-link active" href="#">Pricing</a>
                                <a class="nav-link" href='#'>About</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='row'>
                <div className='col-4 mt-4'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="yasindu sathsara" />
                    </div> <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Adress</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="216, aluthgama" />
                    </div> <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Tel</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="0775067538" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Salary</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="100000.00" />
                    </div>
                    <button type="button" class="btn btn-success">Save Patient</button>
                </div>
                <div className='col-8 mt-4'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Email</th>
                                <th scope="col">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>mdo</td>
                                <td>mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>fat</td>
                                <td>mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>twitter</td>
                                <td>mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='row'>

            </div>
        </div>
    )
}

export default Home;