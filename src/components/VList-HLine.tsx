import type { ReactNode } from "react";

export default function ListWithLine({array}: {array: Array<ReactNode> | Array<string>}){
    return(
        <ul className="list">
            {
                array.map((node, index) => {
                    return(
                        <li key={index} className="list__item">
                            {node}
                        </li>
                    )
                })
            }
        </ul>
    )
}