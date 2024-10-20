interface Iprops {
    imageURL: string;
    alt: string;
    className: string
}

const Image = ({imageURL, alt, className} : Iprops) => {
    return (
        <img src={imageURL} alt={alt} className={className}/>
    )
};

export default Image;