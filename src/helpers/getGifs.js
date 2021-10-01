

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=w6KmcEeHPFbokJszfOrxxssvqOrJww5x`
    const resp = await fetch( url );
    const { data } = await resp.json();

    //recorremos los datos y solo cogemos aquellos que necesitamos, en este caso la id, title y url
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;


}