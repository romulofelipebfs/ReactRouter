import { useParams } from 'react-router-dom'


const Info = () => {
    const {id} = useParams()

    return (
        <div>
            <h2>O id é {id}</h2>
        </div>
    )
}

export default Info