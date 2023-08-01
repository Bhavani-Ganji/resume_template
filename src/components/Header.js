import React from 'react';
import profileImage from '../assets/aishuimg.jpg';

const Header = () => {
    return (
        <header className="header">
            <div className="sidebar">
                <div className="profile-image">
                    <img src={profileImage} alt="Profile" />
                </div>
                <div>
                    <h1>Contact </h1>
                    <h3>Phone : </h3><span>7097457025</span>
                    <h3>Email</h3><span>bhavani@zelarsoft.com</span>
                    <h3>Address</h3><span>123, Hyd</span>
                    <h1>Education</h1>
                    <p>M.Sc Computer Science </p>
                    <span>B.Sc Computer Science</span>
                </div>
            </div>
        </header>

    );
};

export default Header;
