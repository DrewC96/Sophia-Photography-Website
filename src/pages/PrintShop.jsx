import React from 'react';
import Logo from '../assets/Logo.png';
import Card from '../Components/Card';

const products = [
    {
        id: 1,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 2,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 3,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 4,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 5,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 6,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 7,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 8,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 9,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 10,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 11,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 12,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 13,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 14,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 15,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 16,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 17,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 18,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 19,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
    {
        id: 20,
        image: Logo,
        title: 'Canvas Prints',
        description: 'Long-lasting canvas prints for your wall.',
    },
];

export default function PrintShop() {
    return (
        <div className="print-shop">
            <h1>Print Shop</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="card-container">
                                {products.map((p) => (
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