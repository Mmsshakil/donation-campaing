import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const localDonations = localStorage.getItem('favourites');
const donationSize = localDonations ? JSON.parse(localDonations).length : 0; // Check if localDonations is defined
console.log(donationSize);

const data = [
    { name: 'Total', value: 12 },
    { name: 'Donations', value: donationSize },
];

const COLORS = ['#0088FE', '#00C49F'];

const Statistics = () => {
    const totalValue = data.reduce((total, entry) => total + entry.value, 0);

    return (
        <div className="statistics-container flex flex-col lg:flex-row justify-center items-center mb-3">
            <ResponsiveContainer width={400} height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="legend">
                {data.map((entry, index) => (
                    <div key={`legend-${index}`} className="legend-item">
                        <div className="legend-color" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                        <div className="legend-label legend-color font-bold text-xl" style={{ color: COLORS[index % COLORS.length] }}>{`${entry.name}: ${(entry.value / totalValue * 100).toFixed(0)}%`}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;