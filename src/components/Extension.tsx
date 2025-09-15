import Button from "./Button"

export default function Extension(){
    return(
        <section className="extension">
            <div className="extension__text-block">
                <h2 className="extension__title">Download the extension</h2>
                <p className="extension__description">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            </div>
            <div className="extension__card-wrapper">
                {
                    cardContent.map((card, index) => {
                        return(
                            <Card
                                key={index} 
                                img=    {card.img}
                                name=   {card.name}
                                version={card.version}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

function Card({img, name, version}:{img:string, name:string, version:string}){
    return(
        <div className="card">
            <div className="card__content">
                <div className="card__img"><img src={img} alt="" /></div>
                <div className="card__text-block">
                    <h3 className="card__name">Add to <span className="card__name-var">{name}</span></h3>
                    <h4 className="card__version">Minimum version {version}</h4>            
                </div>
            </div>
            <div className="card__dots-line"></div>
            <Button type="blue" >Add & Install Extension</Button>
        </div>
    )
}

const cardContent = [
    {
        img: 'logo-chrome.svg',
        name: 'chrome',
        version: '62'
    },
    {
        img: 'logo-firefox.svg',
        name: 'firefox',
        version: '55'
    },
    {
        img: 'logo-opera.svg',
        name: 'opera',
        version: '46'
    }
]