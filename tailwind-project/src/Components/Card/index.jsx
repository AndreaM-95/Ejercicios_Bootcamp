const Card = ({food, imageUrl, title, grade, restaurant, price }) => {
    return(
        <div className="bg-white w-70 h-70 rounded-lg rounded-lg"> 
            <figure className="relative mb-2 w-full">
                <span className="absolute text-xl font-bold text-green-600 mt-4 px-2 py-2 bg-white/60 rounded-lg"> {grade}</span>
                <img className="w-full h-full" src={imageUrl} alt={title} />
                <div className="absolute flex justify-center">{food}</div>
            </figure>
            <p>
                <span className="text-lg font-medium">{restaurant}</span>
                <span className="text-sm font-light">{price}</span>
            </p>

        </div>
    )
}

export default Card
