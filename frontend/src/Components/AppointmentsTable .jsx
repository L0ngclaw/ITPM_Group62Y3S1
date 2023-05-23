import React from 'react';

const AppointmentsTable = ({ appointments, handleEdit, handleDelete, handleChange, handleSave }) => {
    return (
        <div className="container mx-auto p-4">
            <table className="table-auto w-full mt-4 text-center shadow-lg overflow-hidden rounded-md">
                <thead className="bg-gray-700 text-white rounded-md">
                <tr>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Address</th>
                    <th className="px-4 py-2">Request Type</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Test Type</th>
                    <th className="px-4 py-2">Contact No</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {appointments.map((appointment, index) => (
                    <tr key={appointment._id} className="text-left border-b border-gray-200 bg-white hover:bg-gray-100">
                        <td className="px-4 py-2">
                            {appointment.isEditing
                                ? <input name="email" className="border px-2 py-1 w-full" onChange={(e) => handleChange(index, e)} value={appointment.newData.email} />
                                : appointment.email}
                        </td>
                        <td className="px-4 py-2">
                            {appointment.isEditing
                                ? <textarea name="address" className="border px-2 py-1 w-full" onChange={(e) => handleChange(index, e)} value={appointment.newData.address}></textarea>
                                : appointment.address}
                        </td>
                        <td className="px-4 py-2">
                            {appointment.isEditing
                                ? <input name="requestType" className="border px-2 py-1 w-full" onChange={(e) => handleChange(index, e)} value={appointment.newData.requestType} />
                                : appointment.requestType}
                        </td>
                        <td className="px-4 py-2">
                            {appointment.isEditing
                                ? <input name="date" type="date" className="border px-2 py-1 w-full" onChange={(e) => handleChange(index, e)} value={appointment.newData.date} />
                                : appointment.date}
                        </td>
                        <td className="px-4 py-2">
                            {appointment.isEditing
                                ? <input name="testType" className="border px-2 py-1 w-full" onChange={(e) => handleChange(index, e)} value={appointment.newData.testType} />
                                : appointment.testType}
                        </td>
                        <td className="px-4 py-2">
                            {appointment.isEditing
                                ? <input name="contactNo" className="border px-2 py-1 w-full" onChange={(e) => handleChange(index, e)} value={appointment.newData.contactNo} />
                                : appointment.contactNo}
                        </td>
                        <td className="px-4 py-2 flex justify-around">
                            {appointment.isEditing
                                ? <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded" onClick={() => handleSave(appointment._id, index)}>Save</button>
                                : <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2" onClick={() => handleEdit(index)}>Edit</button>}
                            <button className="bg-red-400 hover:bg-red-600 text-white px-2 py-1 rounded" onClick={() => handleDelete(appointment._id, index)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AppointmentsTable;