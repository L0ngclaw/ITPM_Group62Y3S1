import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ServiceForm = () => {
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [requestType, setRequestType] = useState("");
    const [date, setDate] = useState("");
    const [testType, setTestType] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8090/api/appointments/${email}`
                );
                handleAppointments(response.data);
            } catch (error) {
                console.error("An error occurred while fetching appointments:", error);
            }
        };

        if (email) {
            fetchAppointments();
        }
    }, [email]);

    const handleAppointments = (data) => {
        const formattedData = data.map((appointment) => ({
            ...appointment,
            isEditing: false,
            newData: {
                email: appointment.email,
                address: appointment.address,
                requestType: appointment.requestType,
                date: appointment.date,
                testType: appointment.testType,
                contactNo: appointment.contactNo,
            },
        }));

        setAppointments(formattedData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare the data to send to the server
        const data = {
            email,
            address,
            requestType,
            date,
            testType,
            contactNo,
        };

        try {
            // Send the data to the server
            const response = await axios.post(
                "http://localhost:8090/api/appointments/create-appointment",
                data
            );

            // Check the server response
            if (response.data !== "Service Added") {
                throw new Error("Service was not added successfully");
            }
        } catch (error) {
            console.error("An error occurred while submitting the form:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            {!showForm ? (
                <div className="text-center mt-8">
                    <h1 className="text-4xl mt-10 font-bold text-blue-600">
                        Pure Life Water Quality Testing
                    </h1>
                    <p className="text-lg  mt-6 text-gray-700 ">
                        Pure Life Water Quality Testing, we prioritize your health and safety by providing comprehensive and reliable water quality testing services. We understand the significance of clean and contaminant-free water in maintaining a healthy lifestyle.Our team of experts specializes in various types of tests, including heavy metal testing, microbiological testing, chemical testing, and normal drinking water testing. These tests are crucial in evaluating the purity and safety of your water supply.
                    </p>
                    <p className="text-lg mt-4 text-gray-700">
                        With our services, you can have peace of mind knowing that we are committed to identifying any potential risks or contaminants in your water source. We aim to provide you with the knowledge and understanding necessary to make informed decisions about the usage of your water.
                    </p>
                    <p className="text-lg mt-4 text-gray-700">
                        At Pure Life, we go beyond simply providing test results. We take pride in our exceptional customer service, offering expert guidance and recommendations based on your specific needs. Whether you are a homeowner, a business owner, or a community organization, we are here to support you in maintaining a safe and reliable water supply.Choose Pure Life Water Quality Testing for accurate, comprehensive, and trustworthy water testing services. Let us help you ensure the purity and suitability of your water for all your everyday needs.
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 mt-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setShowForm(true)}
                    >
                        Let's make your appointment here!
                    </button>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 mx-auto"
                >
                    <div className="mb-4 flex items-center">
                        <label className="text-gray-500 text-xs font-bold mr-2 w-1/4" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="text-gray-500 text-xs font-bold mr-2 w-1/4" htmlFor="address">
                            Address
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            placeholder="Address"
                            required
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="text-gray-500 text-xs font-bold mr-2 w-1/4" htmlFor="requestType">
                            Request Type
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="requestType"
                            value={requestType}
                            onChange={e => setRequestType(e.target.value)}
                        >
                            <option value="">Select Request Type</option>
                            <option value="Agent Support">Agent Support</option>
                            <option value="Send Samples">Send Samples</option>
                        </select>
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="text-gray-500 text-xs font-bold mr-2 w-1/4" htmlFor="date">
                            Date
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="date"
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="text-gray-500 text-xs font-bold mr-2 w-1/4" htmlFor="testType">
                            Test Type
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="testType"
                            value={testType}
                            onChange={e => setTestType(e.target.value)}
                        >
                            <option value="">Select Test Type</option>
                            <option value="Heavy Metal Test">Heavy Metal Test</option>
                            <option value="Normal Drinking Water test">Normal Drinking Water Test</option>
                            <option value="microbiological test">Microbiological Test</option>
                            <option value="Chemical test">Chemical compound Test</option>
                        </select>
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="text-gray-500 text-xs font-bold mr-2 w-1/4" htmlFor="contact">
                            Contact Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="contact"
                            type="number"
                            placeholder="Contact Number"
                            pattern="[0-9]{10}"
                            title="Contact number should be exactly 10 digits"
                            value={contactNo}
                            onChange={e => setContactNo(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>

                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => navigate("/search")}
                        >
                            View Appointments
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ServiceForm;


