import img from '../public/pagbot.png'

function Base() {
    return (
        <nav className="nav">
            <img src={img} className="rotate" width="95" height="95"/>
            <h2>
                PagBot
            </h2>
        </nav>
    )
}

export default Base;
