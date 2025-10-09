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
import ElephantSun from '../assets/(2) (1).jpg';
import BlueBee from '../assets/20250918_Hardin Hall Praire_Rojas.jpg';
import PurpleButterfly from '../assets/DSC00067.jpg';
import RedFlower from '../assets/DSC00093.jpg';
import YellowButterfly from '../assets/DSC00161.jpg';
import YellowSpider from '../assets/DSC00278.jpg';
import BrownMantis from '../assets/DSC00284.jpg';
import SpiderWeb1 from '../assets/DSC00325.jpg';
import YellowFlower from '../assets/DSC00396.jpg';
import SpiderWeb2 from '../assets/DSC00457.jpg';
import Peacock from '../assets/IMG_1740.jpg';
import WhiteFlower from '../assets/IMG_2379.jpg';
import PurpleBush from '../assets/Rojas_Critique004.jpg';
import RedWeb from '../assets/sophia r .jpg';
import BeeMate from '../assets/ATT14819.jpg';
import Croc from '../assets/IMG_7418/.jpg';
import Shower from '../assets/untitled-4/jpg';
import DustTree from '../assets/untitled-1240.jpg';
import Chameleon from '../assets/untitled-4332.jpg';
import Impala from '../assets/untitled-5705.jpg';
import Hyena from '../assets/untitled-6822.jpg';
import Charge from '../assets/untitled-9038.jpg';

const southAfrica = [
    {
        id: 1,
        image: Sunset,
        title: 'Golden Sun Descends',
        description: 'Prices Coming Soon',
    },
    {
        id: 2,
        image: ElephantTree,
        title: 'Canopy Conoisseur',
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
        title: 'Old Bull',
        description: 'Prices Coming Soon',
    },
    {
        id: 5,
        image: WhiteMonkey1,
        title: 'Young Vervet Monkey',
        description: 'Prices Coming Soon',
    },
    {
        id: 6,
        image: WhiteMonkey2,
        title: 'Adult Vervet Monkey',
        description: 'Prices Coming Soon',
    },
    {
        id: 7,
        image: ElephantSelfie2,
        title: 'Guardian of the Green',
        description: 'Prices Coming Soon',
    },
    {
        id: 8,
        image: Rooster,
        title: 'Spurfowl in Stillness',
        description: 'Prices Coming Soon',
    },
    {
        id: 9,
        image: Rocks,
        title: '"After Nile Crocodile"',
        description: 'Prices Coming Soon',
    },
    {
        id: 10,
        image: YellowBird,
        title: 'Yellow Bird',
        description: 'Prices Coming Soon',
    },
    {
        id: 11,
        image: SpookyBird,
        title: "Burchell's Coucal",
        description: 'Prices Coming Soon',
    },
    {
        id: 12,
        image: CloudSunset,
        title: 'Baobab at Dusk',
        description: 'Prices Coming Soon',
    },
    {
        id: 13,
        image: Falcon,
        title: 'Brown-Headed Snake Eagle',
        description: 'Prices Coming Soon',
    },
    {
        id: 14,
        image: Pigeon,
        title: "Meve's Starling",
        description: 'Prices Coming Soon',
    },
    {
        id: 15,
        image: Zebra,
        title: 'Zebra Zoom Call',
        description: 'Prices Coming Soon',
    },
    {
        id: 16,
        image: Buffalo,
        title: 'Buffalo',
        description: 'Prices Coming Soon',
    },
    {
        id: 17,
        image: Skull,
        title: 'Female Buffalo Skull',
        description: 'Prices Coming Soon',
    },
    {
        id: 18,
        image: Giraffe1,
        title: 'Neck For Days',
        description: 'Prices Coming Soon',
    },
    {
        id: 19,
        image: Giraffe2,
        title: 'Giraffe',
        description: 'Prices Coming Soon',
    },
    {
        id: 20,
        image: Shrew,
        title: 'Yawning Sengi',
        description: 'Prices Coming Soon',
    },
    {
        id: 21,
        image: Mantis,
        title: 'Mantis',
        description: 'Prices Coming Soon',
    },
    {
        id: 22,
        image: ElephantSun,
        title: 'Golden Hour Graze',
        description: 'Prices Coming Soon',
    },
    {
        id: 23,
        image: Croc,
        title: 'Nile Crocodile',
        description: 'Prices Coming Soon',
    },
    {
        id: 24,
        image: Shower,
        title: 'Dust Bath',
        description: 'Prices Coming Soon',
    },
    {
        id: 25,
        image: DustTree,
        title: 'Morning Haze',
        description: 'Prices Coming Soon',
    },
    {
        id: 26,
        image: Chameleon,
        title: 'Spotlight',
        description: 'Prices Coming Soon',
    },
    {
        id: 27,
        image: Impala,
        title: 'Impala',
        description: 'Prices Coming Soon',
    },
    {
        id: 28,
        image: Hyena,
        title: 'Hyena',
        description: 'Prices Coming Soon',
    },
    {
        id: 29,
        image: Charge,
        title: 'Elephant Crossing',
        description: 'Prices Coming Soon',
    },
];

const nebraska = [
    {
        id: 1,
        image: BlueBee,
        title: 'bugs',
        description: 'Prices Coming Soon',
    },
    {
        id: 2,
        image: PurpleButterfly,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 3,
        image: RedFlower,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 4,
        image: YellowButterfly,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 5,
        image: YellowSpider,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 6,
        image: BrownMantis,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 7,
        image: SpiderWeb1,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 8,
        image: YellowFlower,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 9,
        image: SpiderWeb2,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 10,
        image: Peacock,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 11,
        image: WhiteFlower,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 12,
        image: PurpleBush,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 13,
        image: RedWeb,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
    {
        id: 14,
        image: BeeMate,
        title: 'spiders',
        description: 'Prices Coming Soon',
    },
];

const northAmerica = [
    
];

const madagascar = [

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
            <h2 className="print-shop-titles">{titleMap[category] || 'South Africa'}</h2>

            <div className='print-shop-container'>
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