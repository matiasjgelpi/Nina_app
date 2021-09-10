import "bootstrap/dist/css/bootstrap.min.css"

const itemListContainer = ({greeting}) => {
    return (
        <div>
            <p className="font-weight-bold font-italic">{greeting}</p>
        </div>
    )
}

export default itemListContainer 