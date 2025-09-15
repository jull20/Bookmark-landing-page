export default function Button({type, children}: {type: 'orange' | 'blue' | 'grey', children:string}){
    return(
        <button className={`button ${type}`}>
            {children}
        </button>
    )
}