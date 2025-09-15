import Button from "./Button"

export default function Hero(){
    return(
        <section className='hero'>
            <div className="hero__text-wrapper">
                <h1 className="hero__title">A Simple Bookmark Manager</h1>
                <p className="hero__description">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="hero__button-wrapper">
                    <Button type='blue'>Get it on Chrome</Button>
                    <Button type='grey'>Get it on Firefox</Button>
                </div>
            </div>
            <div className="heroImg"></div>

        </section>
    )
}