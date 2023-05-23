import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AppointmentsTable from "../Components/AppointmentsTable ";

function SearchPage() {
    const [email, setEmail] = useState('');
    const [appointments, setAppointments] = useState([]);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get(`http://localhost:8090/api/appointments/appointments-list/${email}`,);


            const fetchedAppointments = response.data['appointments'].map(item => ({
                ...item,
                isEditing: false,
                newData: {...item}
            }));
            setAppointments(fetchedAppointments);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchAppointments();
    }

    const handleEdit = (index) => {
        const newAppointments = [...appointments];
        newAppointments[index].isEditing = true;
        setAppointments(newAppointments);
    }

    const handleDelete = async (id, index) => {
        console.log(id)
        try {
            await axios.delete(`http://localhost:8090/api/appointments/remove-appointment/${id}`);
            const newAppointments = [...appointments];
            newAppointments.splice(index, 1);
            setAppointments(newAppointments);
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (index, event) => {
        const newAppointments = [...appointments];
        newAppointments[index].newData[event.target.name] = event.target.value;
        setAppointments(newAppointments);
    }

    const handleSave = async (id, index) => {
        try {
            const response = await axios.put(`http://localhost:8090/api/appointments/update-appointment/${id}`, appointments[index].newData);
            if (response.status === 200) {
                const newAppointments = [...appointments];
                newAppointments[index].isEditing = false;
                newAppointments[index] = {...appointments[index].newData, isEditing: false};
                setAppointments(newAppointments);
            } else {
                throw new Error('Update Failed');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center p-4">
                <form onSubmit={handleSubmit}
                      className="flex justify-center items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                    <input
                        className="shadow appearance-none border rounded py-2 w-2/3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
                        id="email" type="email" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required/>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Search
                    </button>
                </form>
            </div>
            <div>
                <AppointmentsTable
                    appointments={appointments}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleChange={handleChange}
                    handleSave={handleSave}
                />
            </div>
        </div>
    );
}

export default SearchPage;

