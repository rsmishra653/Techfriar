import Cards from '../components/Cards/Cards'

const Main = () => {
    return (
        <div>
            {/* View types */}
            <div className="views-wrapper">
                <div className="btn-wrapper">
                    <button className="buttons list-view"></button>
                    <button className="buttons card-view"></button>
                    <button className="buttons btn-connections active"></button>
                </div>
            </div>

            {/* User card */}
            <Cards />
        </div>
    )
}

export default Main
