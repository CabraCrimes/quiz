import "./Memory.css"

const Memory = () => {
    return(
        <>
            <div>
                <h1>Memory</h1>
                {/* THIS NEED TO BE A COMPONENT */}
                <div className="row">
                    <div className="column">
                        <div className="card">PICTURE</div>
                    </div>
                    <div className="column">
                        <div className="card">PICTURE</div>
                    </div>
                    <div className="column">
                        <div className="card">PICTURE</div>
                    </div>
                    <div className="column">
                        <div className="card">PICTURE</div>
                    </div>
                    </div>
                </div>
        </>
    );
};

export default Memory;