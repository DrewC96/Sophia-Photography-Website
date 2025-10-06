import React from 'react';
import Logo from '../assets/Logo.png';
import Card from '../Components/Card';
import Sunset from '../assets/IMG_0552.jpg';
import ElephantTree from '../assets/IMG_1139.jpg';
import Ravine from '../assets/IMG_1543.jpg';

const products = [
    {
        id: 1,
        image: Sunset,
        title: 'Sunset',
        description: 'Prices Coming Soon',
        className: 'Sunset',
    },
    {
        id: 2,
        image: ElephantTree,
        title: 'Elephant Grabbing Tree',
        description: 'Prices Coming Soon',
    },
    {
        id: 3,
        image: Ravine,
        title: 'Ravine',
        description: 'Prices Coming Soon',
    },
    {
        id: 4,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 5,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 6,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 7,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 8,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 9,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 10,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 11,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 12,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 13,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 14,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 15,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 16,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 17,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 18,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 19,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 20,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
];

export default function PrintShop() {
    return (
        <div className="print-shop">
            <h1>Print Shop</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="card-container-printshop">
                                {products.map((p) => (
                                <div key={p.id}>
                                    <Card
                                       
                                        image={p.image}
                                        title={p.title}
                                        description={p.description}
                                    />
                                </div>
                                ))}
                            </div> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}