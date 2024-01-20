import React, { Suspense } from 'react'

const Analytics = () => {
    return (

        <Suspense fallback="loading....">
            <div>
                <h1>hello world</h1>
            </div>
        </Suspense>

    )
}

export default Analytics