import React from 'react';
import Logo from '../assets/Logo.png';
import Card from '../Components/Card';

const products = [
    {
        id: 1,
        image: Logo,
        title: 'Custom T-Shirts',
        description: 'Design your own t-shirts with our easy-to-use online tool.',
    },
    {
        id: 2,
        image: Logo,
        title: 'Photo Prints',
        description: 'High-quality prints in multiple sizes.',
    },
    {
        id: 3,
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
                            {products.map((p) => (
                                <Card
                                    key={p.id}
                                    image={p.image}
                                    title={p.title}
                                    description={p.description}
                                />
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}