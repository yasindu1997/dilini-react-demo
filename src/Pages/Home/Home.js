import './Home.css'
import Navbar from '../../components/NavBar/Navbar';
import './Home.css'
import { useEffect, useState } from 'react';

function Home() {

    const [title, setTile] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');
    const [data, setData] = useState([]);

    //on compoenent load(render),state change
    useEffect(() => {
        getData();
    }, [])

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

    const updatePost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
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
                alert('Data Updated !');
                getData();
             })
            .catch((err) => { alert('Update Failed !') });
    }

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
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
                    <button type="button" class="btn btn-success me-4" onClick={addPost}>Save Patient</button>
                    <button type="button" class="btn btn-warning me-4" onClick={updatePost}>Update</button>
                </div>
                <div className='col-8 mt-4'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">userId</th>
                                <th scope="col">id</th>
                                <th scope="col">title</th>
                                <th scope="col">completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(todo => {
                                return (
                                    <tr>
                                        <th scope="row">{todo.userId}</th>
                                        <td>{todo.id}</td>
                                        <td>{todo.title}</td>
                                        <td>{todo.completed}</td>
                                    </tr>
                                )
                            })}
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