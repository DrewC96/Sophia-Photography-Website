import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card';
import Sunset from '../assets/IMG_0552.jpg';
import Ravine from '../assets/IMG_1543.jpg';
import Rocks from '../assets/IMG_1685.jpg';
import ElephantSelfie1 from '../assets/IMG_2514.jpg';
import WhiteMonkey1 from '../assets/IMG_4532.jpg';
import WhiteMonkey2 from '../assets/IMG_6531.jpg';
import ElephantSelfie2 from '../assets/IMG_8616.jpg';
import Rooster from '../assets/IMG_8661.jpg';
import YellowBird from '../assets/IMG_8718.jpg';
import SpookyBird from '../assets/IMG_9229.jpg';
import CloudSunset from '../assets/IMG_9307.jpg';
import Falcon from '../assets/IMG_9535.jpg';
import Pigeon from '../assets/IMG_9597.jpg';
import Zebra from '../assets/IMG_0525 - Copy.jpg';
import Buffalo from '../assets/IMG_4017.jpg';
import Skull from '../assets/IMG_4078 - Copy.jpg';
import Giraffe1 from '../assets/IMG_7819.jpg';
import Giraffe2 from '../assets/IMG_7826.jpg';
import Shrew from '../assets/IMG_7969.jpg';
import Mantis from '../assets/IMG_8012.jpg';
import ElephantTree from '../assets/IMG_1139.jpg';

const southAfrica = [
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
        image: ElephantSelfie1,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 5,
        image: WhiteMonkey1,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 6,
        image: WhiteMonkey2,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 7,
        image: ElephantSelfie2,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 8,
        image: Rooster,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 9,
        image: Rocks,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 10,
        image: YellowBird,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 11,
        image: SpookyBird,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 12,
        image: CloudSunset,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 13,
        image: Falcon,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 14,
        image: Pigeon,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 15,
        image: Zebra,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 16,
        image: Buffalo,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 17,
        image: Skull,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 18,
        image: Giraffe1,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 19,
        image: Giraffe2,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 20,
        image: Shrew,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
    {
        id: 21,
        image: Mantis,
        title: 'Canvas Prints',
        description: 'Prices Coming Soon',
    },
];

const nebraska = [
    {
        id: 1,
        image: null,
        title: 'bugs',
        description: 'bugs',
    },
    {
        id: 2,
        image: null,
        title: 'spiders',
        description: 'spiders',
    },
];

const northAmerica = [
    {
        id: 1,
        image: null,
        title: 'nebraska wildlife',
        description: 'nebraska wildlife',
    },
];

const madagascar = [
    {
        id: 1,
        image: null,
        title: 'nebraska wildlife',
        description: 'nebraska wildlife',
    },
];

const categories = {
    'south-africa':  southAfrica,
    'nebraska': nebraska,
    'north-america': northAmerica,
    'madagascar': madagascar,
};


export default function PrintShop() {
   const { category } = useParams();
   const products = categories[category] || southAfrica;
   
   const titleMap = {
    'south-africa': 'South Africa',
    'nebraska': 'Nebraska',
    'north-america': 'North America',
    'madagascar': 'Madagascar',
   };

    return (
        <div className="print-shop">
            <h1>Print Shop</h1>
            <h2>{titleMap[category] || 'South Africa'}</h2>

            <div className='print-shop-card'>
                {products.map((p) => (
                    <Card
                        key={p.id}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                    />
                ))}
            </div>
        </div>
    );
}