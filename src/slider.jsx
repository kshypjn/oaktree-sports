import Marquee from "react-fast-marquee";
<link rel="stylesheet" href="index.css" />


function Thumbnail() {
    const images = [
        {
            url: "src/assets/heroop1.jpeg"
        },
        {
            url: "src/assets/heroop2.jpeg"
        },
        {
            url: "src/assets/heroop3.jpeg"
        },
        {
            url: "src/assets/heroop4.jpeg"
        },
        {
            url: "src/assets/heroop5.jpeg"
        },
    ];

    return (
       <div className="mt-24 mb-12 md:mb-16">
        <Marquee autoFill={true} pauseOnHover={true} direction="left" speed={90} delay={0} className="flex flex-row">
        {images.map((image, index) => (
            <img
                key={index}
                src={image.url}
                alt={`Image ${index}`}
                className="w-40 mx-2 rounded-lg carousel-image sm:max-md:w-56 md:w-car"
                // style={{ width: '600px' }}

            />
        ))}

        </Marquee>
       </div>
    );
}

export default Thumbnail;
