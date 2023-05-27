import React from 'react'

const Loader = () => {
    return (
        <div className='position-absolute top-50 start-50 translate-middle'>
            <div class="spinner-border text-primary spinner-size" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    )
}

export default Loader