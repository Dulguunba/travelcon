import { useRouter } from 'next/router'
import React from 'react'

const Tours = () => {
    const router = useRouter();
    const { tour } = router.query;
    return (
        <div>
            {tour ? `Tour: ${tour}` : 'Loading...'}
        </div>
    )
}

export default Tours