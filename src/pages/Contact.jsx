import React from 'react';
import Card from '../Components/Card';
import Logo from '../assets/Logo.png';


const contacts = [
{
    id: 1,
    image: Logo,
    title: "Phone Number",
    description: "(402) 699-8475",
},
{
    id: 2,
    image: Logo,
    title: "Email",
    description: "sohpiarojas@gmail.com",
},
{   id: 3,
    image: Logo,
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