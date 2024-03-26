function Clothes({shop}) {
    return(
        <div className="products">
            {shop.map((element => {
                const{id, name, searchTerm, price, image} = element;
                return(
                    <div className="product-card" key={id}>
                        <img src={image} width={400} height={500} alt="photo"/>
                        <div className="">
                        <h3>{name}</h3>
                        <h4>{searchTerm}</h4>
                        <h4>$ {price}</h4>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Clothes;