import React from 'react';
import './landingPage.css'; // Importing external CSS file
import nannyImage from './image.png';

const LandingPage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>Welcome to NannyConnect</h1>
                <p style={styles.description}>A reliable platform to connect parents with trusted caregivers.</p>
                <button style={styles.button}>Get Started</button>
            </div>
            <div style={styles.imageContainer}>
                <img src={nannyImage} alt="Nanny" style={styles.image} />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f7f7f7',
    },
    content: {
        textAlign: 'center',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        color: '#333',
    },
    description: {
        fontSize: '1.2rem',
        marginBottom: '2rem',
        color: '#666',
    },
    button: {
        padding: '1rem 2rem',
        fontSize: '1.1rem',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    button:hover: {
        backgroundColor: '#0056b3',
    },
    imageContainer: {
        flex: '1',
        textAlign: 'center',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
};

export default LandingPage;
