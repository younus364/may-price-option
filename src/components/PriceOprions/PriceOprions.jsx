import React from 'react';
import PriceOption from '../PrceOption/PriceOption';

const PriceOprions = () => {
    
  const priceOprions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price_per_month": 1500,
      "currency": "BDT",
      "features": [
        "Access to all gym equipment",
        "Locker room access",
        "Showers available",
        "Towel service",
        "Free Wi-Fi"
      ]
    },
    {
      "id": 2,
      "name": "Standard Membership",
      "price_per_month": 3000,
      "currency": "BDT",
      "features": [
        "Access to all gym equipment",
        "Locker room & showers",
        "Towel service",
        "Basic group fitness classes (e.g., yoga, Zumba)",
        "Monthly fitness assessment",
        "Fitness tracking app access"
      ]
    },
    {
      "id": 3,
      "name": "Premium Membership",
      "price_per_month": 5000,
      "currency": "BDT",
      "features": [
        "24/7 gym access",
        "Access to all group fitness classes",
        "Swimming pool access",
        "Sauna & steam room",
        "Free personal training (2 sessions/month)",
        "Nutrition consultation",
        "On-demand workout library"
      ]
    },
    {
      "id": 4,
      "name": "Family Plan",
      "price_per_month": 9000,
      "currency": "BDT",
      "features": [
        "Access for 2 adults + 2 children",
        "All group classes included",
        "Free personal training (3 sessions/month)",
        "Swimming pool & steam room access",
        "Childcare/play area",
        "Family health workshop invites"
      ]
    },
    {
      "id": 5,
      "name": "Day Pass",
      "price_per_day": 300,
      "currency": "BDT",
      "features": [
        "Full gym access for 1 day",
        "Locker room & showers",
        "Towel service"
      ]
    },
    {
      "id": 6,
      "name": "Student Membership",
      "price_per_month": 1200,
      "currency": "BDT",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "1 group class per week",
        "Requires valid student ID",
        "Discount on personal training sessions"
      ]
    },
    {
      "id": 7,
      "name": "Corporate Plan",
      "price_per_month": 12000,
      "currency": "BDT",
      "features": [
        "Access for up to 5 employees",
        "All classes included",
        "Quarterly wellness workshop",
        "Corporate fitness challenges",
        "Priority booking for instructors"
      ]
    },
    {
      "id": 8,
      "name": "Flex Pass (10 Visits)",
      "price_per_month": 2500,
      "currency": "BDT",
      "features": [
        "10 gym visits per month",
        "Group fitness class access",
        "Locker room access",
        "Showers available"
      ]
    },
    {
      "id": 9,
      "name": "VIP Wellness Plan",
      "price_per_month": 8000,
      "currency": "BDT",
      "features": [
        "All Premium features",
        "Massage & recovery sessions",
        "Hydrotherapy or Jacuzzi access",
        "Wellness workshops",
        "Priority class booking",
        "Rewards program points"
      ]
    },
    {
      "id": 10,
      "name": "Trial Pass (7 Days)",
      "price_per_pass": 0,
      "currency": "BDT",
      "features": [
        "7-day full access trial",
        "Access to equipment and classes",
        "Free fitness assessment",
        "Locker & shower access"
      ]
    }
  ]


    return (
        <div>
            <h2 className=' text-5xl '>Best prices in the town</h2>
            <div className='grid grid-cols-3 gap-4 '>
                {
                priceOprions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOprions;