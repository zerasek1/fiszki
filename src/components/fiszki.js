import { useState } from "react";
import cards from "./unit8.json";

const Fiszki = () => {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const card = cards[index];

    const next = () => {
        setIndex((e) => (e + 1) % cards.length);
        setFlipped(false);
    };

    const prev = () => {
        setIndex((e) => (e - 1 + cards.length) % cards.length);
        setFlipped(false);
    };

    return (
        <>
            <div className="d-flex justify-content-center p-5 text-center">
                <div className="card w-25" style={{ height: "400px", cursor: "pointer" }} onClick={() => setFlipped((e) => !e)}>
                    <div className="card-body p-5 d-flex justify-content-center align-items-center">
                        <h2>{flipped ? card.english : card.polish}</h2>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-success m-2" onClick={prev}>&lt;-</button>
                <button className="btn btn-success m-2" onClick={next}>-&gt;</button>
                <p className="m-3">{index + 1}/{cards.length}</p>
            </div>
        </>
    );
};

export default Fiszki;