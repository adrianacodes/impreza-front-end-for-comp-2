import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer style={footerStyle}>
            <p>Copyright © {currentYear} Impreza. All rights reserved.</p>
        </footer>
    );
};

// Optional: Inline CSS for footer styling
const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    color: '#333',
};

export default Footer;
