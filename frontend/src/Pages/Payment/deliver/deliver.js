import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Deliver = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");

    return (
        <div style={{ padding: 50, marginTop: 20 }}>
            <h4>Cash on delivery</h4>
            <form>
                <div class="form-group mt-4">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" style={{width: "60%"}} class="form-control" onChange={(e) => setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group mt-4">
                    <label for="exampleInputPassword1">Address</label>
                    <input type="text" style={{width: "60%"}} class="form-control" onChange={(e) => setAddress(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div class="form-group mt-4">
                    <label class="form-check-label" for="exampleCheck1">Phone Number</label>
                    <input type="text" style={{width: "60%"}} class="form-control" onChange={(e) => setNumber(e.target.value)} id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    )
}

export default Deliver;