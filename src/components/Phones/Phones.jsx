
import { PieChart, Pie, XAxis } from 'recharts';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {


                const phoneData = data.data.data;
                const phoneWidthFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phoneWidthFakeData)
                console.log(phoneWidthFakeData)
            })

    }, [])
    return (
        <div>
            <h2 className="text-3xl">Phones:{phones.length} </h2>
            <PieChart data={phones} width={500} height={400}>
                
                <Pie dataKey='price'
                    isAnimationActive='isAnimationActive'
                    stroke='blue' fill="#82ca9d"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                >

                </Pie>

            </PieChart>


        </div>
    );
};

export default Phones;