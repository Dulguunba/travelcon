import React from 'react'

const Ticket = () => {
    return (
        <div className='flex items-center justify-center'>
            <div style={{ backgroundColor: '#f6f6f6', padding: '20px', width: '600px' }}>
                <h1 style={{ color: '#333', fontWeight: '700', fontSize: '25px' }}>Dear, Name</h1>
                <p style={{ color: '#666', fontWeight: '700', marginTop: '50px', fontSize: '32px' }}>Your book has been confirmed</p>
                <div style={{ backgroundColor: '#4997D3', display: 'flex', color: 'white', justifyContent: 'center', width: '100%', height: '200px', flexDirection: 'column', marginTop: '20px', marginBottom: '20px', borderRadius: '10px', padding: '10px', alignItems: 'center' }}>
                    <p style={{ color: 'white', fontWeight: '500', fontSize: '26px' }}>Details</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <p>Departure</p>
                            <p>Tue, 20 Feb 2023</p>
                            <p style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>Time: 9:00 pm</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <p>Arruval</p>
                            <p>Tue, 20 Feb 2023</p>
                            <p style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>Time: 9:00 pm</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyItems: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ color: '#666', fontWeight: '700' }}>Book more tours with</p>
                    <img src="/logoWithColor.png" style={{ width: '200px', height: '200px', borderRadius: '10px', marginTop: '10px' }} alt="Logo" />
                </div>

            </div>
        </div>
    )
}

export default Ticket;