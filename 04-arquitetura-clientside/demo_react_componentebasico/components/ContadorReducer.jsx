import { useReducer } from "react";

function reducer(estado, acao) {
    switch (acao.type) {
        case "incremento": {
            return {contagem: estado.contagem + acao.valor};
        }
        case "decremento": {
            return {contagem: estado.contagem - 1};
        }
        default: {
            throw new Error(`Tipo de ação desconhecida: ${acao.type}`);
        }
    }
}

export function ContadorReducer() {
    const estadoInicial = {contagem: 0};
    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    const handleClickMais = () => {
        dispatch({type: "incremento", valor: 2})
    }

    const handleClickMenos = () => {
        dispatch({type: "decremento"});
    }

    return (
        <>
            <div>
                <button onClick={handleClickMais}>+</button>
                <button onClick={handleClickMenos}>-</button>
                <span>Contagem: {estado.contagem}</span>
            </div>
        </>
    );
}