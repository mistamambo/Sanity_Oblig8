import client from '../client'

const movie = `
title,
"actor": actor->slugactor.current,
"slug": slugmovie.current,
tekst,
"Bilde": poster{asset->{url}},
"actor2": actor2->slugactor.current,
`

const actor = `
actor,
"slug": slugactor.current,
actorTekst,
"poster": poster{asset->{url}},
"movie": movie->slugmovie.current,
`

export async function getMovies (title) {
    const data = await client.fetch(`*[_type == "movie"]{${movie}}`)
    console.log(data);
    return data
}

export async function getActor () {
    const data = await client.fetch(`*[_type == "actor"]{${actor}}`)
    console.log(data);
    return data
}