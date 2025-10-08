import './E3d.css'

function E3d() {
    return (
        <div className='container'>
            <div className='outside'>
                <div className='cube'>
                    <div className='inside left-side' />
                    <div className='inside rigth-side' />
                    <div className='inside top-side' />
                    <div className='inside bottom-side' />
                    <div className='inside back-side' />
                    <div className='inside front-side' />
                </div>
            </div>
        </div>
    )
}

export default E3d