import React from 'react';
import Card from '../Components/Card';
import Instagram from '../assets/download.jpg'
import Phone from '../assets/images.png'
import Gmail from '../assets/download.png' 

const contacts = [
{
    id: 1,
    image: Phone,
    title: "Phone Number",
    description: "(402) 699-8475",
},
{
    id: 2,
    image: Gmail,
    title: "Email",
    description: "srojas.conservationmgmt@gmail.com",
},
{   id: 3,
    image: Instagram,
    title: "Instagram",
    description: "@srojas.conservation_mgmt",
},
];


export default function Contact() {
    return (
            <div className="contact-page">
                <h1>Contact</h1>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="card-container-contacts">
                                    {contacts.map((p) => (
                                    <Card
                                        key={p.id}
                                        image={p.image}
                                        title={p.title}
                                        description={p.description}
                                    />
                                    ))}
                                </div> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
}