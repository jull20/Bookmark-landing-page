import TabsMenu from "./TabsMenu"
export default function Features(){
    return(
        <section className='features'>
            <div className="features__text-block">
                <h2 className="features__title">Features</h2>
                <p className="features__description">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            <TabsMenu />
        </section>
    )
}

