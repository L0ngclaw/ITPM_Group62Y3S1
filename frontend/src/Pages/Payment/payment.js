import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Payment = () => {
    const navigate = useNavigate();
    const [payment, setPayment] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        getPayments();

    }, []);

    const deletePayment = (id) => {
        try {
            axios({
                method: "delete",
                baseURL: `http://localhost:8080/payment/delete/${id}`,
            }).then((res) => {
                getPayments();
            });
        } catch (error) {
            alert(error);
        }
    }

    const getPayments = () => {
        try {
            axios({
                method: "get",
                baseURL: `http://localhost:8080/payment/get`,
            }).then((res) => {
                setPayment(res.data.payment);
            });
        } catch (error) {
            alert(error);
        }
    }

    const searchTextHander =(text)=> {
        if(text) {
            const filterPayment = payment.filter(t => t.name.includes(text))
            setPayment(filterPayment);
        } else {
            getPayments();
        }
    }

    console.log(payment)


    return (
        <div style={{ padding: "50px 200px", marginTop: 20 }}>
            <h4>Payment History</h4>
            <input type="text" style={{width: "30%", margin: "40px 0"}} placeholder="Search here" class="form-control" onChange={(e) => searchTextHander(e.target.value)} id="exampleInputPassword1" />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Card Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payment.map(p => (
                            <tr>
                                <td>{p.name}</td>
                                <td>{p.amount}</td>
                                <td>{p.cardNumber}</td>
                                <td><button className="btn btn-danger" onClick={() => { deletePayment(p._id) }}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Payment;