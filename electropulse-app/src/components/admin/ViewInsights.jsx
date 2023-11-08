import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line, Bar } from 'react-chartjs-2';
import image from '../admin/images/user-circle-solid-24.png';
import { Chart as Chartjs } from 'chart.js/auto';

const ViewInsights = () => {
    const [salesChartData, setSalesChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Sales',
                data: [],
                backgroundColor: 'orange',
                borderColor: 'orange',
                fill: false,
            },
        ],
    });

    const [orderChartData, setOrderChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Orders',
                data: [],
                backgroundColor: 'green',
                borderColor: 'green',
                fill: false,
            },
        ],
    });

    useEffect(() => {
        // Fetch sales data from the API
        fetch('/api/sales-data')
            .then((response) => response.json())
            .then((data) => {
                setSalesChartData((prevChartData) => ({
                    ...prevChartData,
                    labels: data.labels,
                    datasets: [
                        {
                            ...prevChartData.datasets[0],
                            data: data.sales,
                        },
                    ],
                }));
            })
            .catch((error) => console.error('Error fetching data:', error));

        fetch('/api/order-data')
            .then((response) => response.json())
            .then((data) => {
                setOrderChartData((prevOrderChartData) => ({
                    ...prevOrderChartData,
                    labels: data.labels,
                    datasets: [
                        {
                            ...prevOrderChartData.datasets[0],
                            data: data.orders,
                        },
                    ],
                }));
            })
            .catch((error) => console.error('Error fetching order data:', error));
    }, []);
    const loggedInUser = localStorage.getItem('loggedInUser');

    return (
        <div className="wrapper">
            {/* Sidebar */}
            <div className="sidebar">
                {/* Profile image & text */}
                <div className="profile">
                    <img src={image} alt="profile_picture" />
                    <h3>Hello,</h3>
                    <p>{loggedInUser ? `${loggedInUser}` : 'Account'}</p>
                    {/* Navigation links */}
                    <ul>
                        <li>
                            <Link to="/dashboard" className="active">
                                <span className="icon">
                                    <i className="fas fa-home"></i>
                                </span>
                                <span className="item">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/insights">
                                <span className="icon">
                                    <i className="fas fa-desktop"></i>
                                </span>
                                <span className="item">View Insights</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/sell-products">
                                <span className="icon">
                                    <i className="fas fa-desktop"></i>
                                </span>
                                <span className="item">Sell Products</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>

            {/* Insights */}
            <div className="red">
                <div className="chart-container">
                    <div className="chart">
                        <Line data={salesChartData} />
                    </div>
                    <div className="chart">
                        <Bar data={orderChartData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewInsights;
