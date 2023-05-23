import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Card = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [cardNumber, setNumber] = useState("");
    const [expireDate, setExpireDate] = useState("")
    const [ccv, setCcv] = useState("");
    const [amount, setAmount] = useState("");

    const createPayment = async () => {
        try {
            await axios({
                method: "post",
                baseURL: `http://localhost:8080/payment/create`,
                data: {
                    name,
                    cardNumber,
                    expireDate,
                    ccv,
                    amount
                },
              }).then((res) => {
                navigate("/history")
              });
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div style={{ padding: 50, marginTop: 20 }}>
            <h4>Payment Details</h4>
            <form>
                <div class="form-group mt-4">
                    <label class="form-check-label" for="exampleCheck1">Card Number</label>
                    <input type="text" style={{width: "60%"}} class="form-control" onChange={(e) => setNumber(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div class="form-group mt-4">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" style={{width: "60%"}} class="form-control" onChange={(e) => setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group mt-4">
                    <label for="exampleInputPassword1">CCV</label>
                    <input type="text" style={{width: "60%"}} class="form-control" onChange={(e) => setCcv(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div class="form-group mt-4">
                    <label for="exampleInputPassword1">Expire Date</label>
                    <input type="text" style={{width: "60%"}} class="form-control" onChange={(e) => setExpireDate(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div class="form-group mt-4">
                    <label for="exampleInputPassword1">Amount</label>
                    <input type="number" style={{width: "60%"}} class="form-control" onChange={(e) => setAmount(e.target.value)} id="exampleInputPassword1" />
                </div>
                <button type="button" class="btn btn-primary mt-4" onClick={createPayment}>Pay Now</button>
            </form>
        </div>
    )
}

export default Card;