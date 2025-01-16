import React from 'react';

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Recipe App. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center' as 'center',
        padding: '1rem',
        backgroundColor: '#f1f1f1',
        position: 'fixed' as 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
    },
};