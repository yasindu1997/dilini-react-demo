import './Home.css'
import Navbar from '../../components/NavBar/Navbar';
import './Home.css'
import { useState } from 'react';

function Home() {

    const [title, setTile] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');

    const addPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                alert("Data saved !");
                clear();
            })
            .catch((err) => {
                alert("Save Failed !")
            });
    }

    const clear = () => {
        setTile('');
        setBody('');
        setUserId('');
    }

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
                        <label for="exampleFormControlInput1" class="form-label">Tile</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Hello Java" value={title} onChange={(e) => { setTile(e.value) }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Body</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your body" value={body} onChange={(e) => { setBody(e.value) }} />
                    </div> <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">User Id</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="1" value={userId} onChange={(e) => { setUserId(e.value) }} />
                    </div>
                    <button type="button" class="btn btn-success" onClick={addPost}>Save Patient</button>
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