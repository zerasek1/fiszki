import { useState } from "react";
import cards from "./unit8.json";

const losuj = () => [...cards].sort(() => Math.random() - 0.5).slice(0, 20);

const Test = () => {
    const [pytania, setPytania] = useState(losuj);
    const [nr, setNr] = useState(0);
    const [text, setText] = useState("");
    const [punkty, setPunkty] = useState(0);
    const [bledy, setBledy] = useState([]);

    const submit = () => {
        const pytanie = pytania[nr];

        if (text.trim().toLowerCase() === pytanie.english.toLowerCase()) {
            setPunkty(punkty + 1);
        } else {
            setBledy([...bledy, { ...pytanie, odp: text }]);
        }

        setText("");
        setNr(nr + 1);
    };

    const restart = () => {
        setPytania(losuj());
        setNr(0);
        setPunkty(0);
        setBledy([]);
    };
if (nr >= pytania.length) {
    return (
        <div className="container text-center p-5">
            <h2>Wynik: {punkty}/{pytania.length}</h2>

            {bledy.length > 0 && (
                <table className="table table-bordered w-75 mx-auto mt-4">
                    <thead>
                        <tr>
                            <th>Po polsku</th>
                            <th>Twoja odpowiedź</th>
                            <th>Poprawnie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bledy.map((b) => (
                            <tr key={b.id}>
                                <td>{b.polish}</td>
                                <td className="text-danger">{b.odp}</td>
                                <td className="text-success">{b.english}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <button className="btn btn-success mt-3" onClick={restart}>
                Zacznij od nowa
            </button>
        </div>
    );
}

    return (
        <>
            <p className="text-center mt-5">Pytanie {nr + 1}/{pytania.length}</p>
            <h3 className="text-center">{pytania[nr].polish}</h3>

            <div className="d-flex justify-content-center p-5">
                <input
                    className="form-control m-2"
                    style={{ width: "300px" }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submit()}
                />
                <button className="btn btn-success m-2" onClick={submit}>
                    Dalej
                </button>
            </div>
        </>
    );
};

export default Test;