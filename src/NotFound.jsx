import { useNavigate } from "react-router-dom"

export default function NotFoundPage () {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Hey! You ae Lost</h1>
            <p>The page you are looking for is not available</p>

            <button onClick={ () => navigate('/')}>Go Back to HomePage</button>
        </div>
    )
}