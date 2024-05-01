import background from "../assets/background.jpg"

const Hero = () => {
    return(
        <div>
            <img src={background} className="w-full max-h-[600px] object-cover"/>
        </div>
    )
}

export default Hero