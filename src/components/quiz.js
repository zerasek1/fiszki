import { useState } from "react";
import cards from "./unit8.json";

const losuj = () => cards[Math.floor(Math.random() * cards.length)];

const Quiz = () => {
    const [card, setCard] = useState(losuj);
    const [text, setText] = useState("");
    const [proby, setProby] = useState(0);
    const [dobrze, setDobrze] = useState(false);

    const koniec = proby >= 3;

    const podpowiedz =
        card.english.slice(0, proby) +
        card.english.slice(proby).replace(/[a-z]/gi, "_");

    const nastepne = () => {
        setCard(losuj());
        setText("");
        setProby(0);
    };

    const submit = () => {
        if (text.trim().toLowerCase() === card.english.toLowerCase()) {
            setDobrze(true);
            nastepne();
        } else {
            setDobrze(false);
            setProby(proby + 1);
            setText("");
        }
    };

    return (
        <>
            <h3 className="text-center mt-5">{card.polish}</h3>

            {proby > 0 && !koniec && (
                <p className="text-center fs-4">{podpowiedz}</p>
            )}

            <div className="d-flex justify-content-center p-5">
                <input
                    className="form-control m-2"
                    style={{ width: "300px" }}
                    value={text}
                    disabled={koniec}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submit()}
                />
                <button className="btn btn-success m-2" onClick={submit} disabled={koniec}>
                    Odpowiedz
                </button>
            </div>

            {dobrze && <p className="text-center text-success">Dobrze!</p>}
            {proby > 0 && !koniec && (
                <p className="text-center text-danger">Źle, zostało prób: {3 - proby}</p>
            )}

            {koniec && (
                <div className="text-center">
                    <p className="text-danger">
                        Poprawna odpowiedź: <strong>{card.english}</strong>
                    </p>
                    <button className="btn btn-primary" onClick={nastepne}>
                        Następne słówko
                    </button>
                </div>
            )}
        </>
    );
};

export default Quiz;