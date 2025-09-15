export default function ImgAndBgShape({img}: {img:string}){
    return(
        <div className="bg-shape">
            <img className="img" src={img} alt="" />
            <img className="shape" src="bg-shape-lg.svg" alt="" />
        </div>
    )
}