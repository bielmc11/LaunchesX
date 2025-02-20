import type { LaunchesQuery } from "../types"

export const getLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {data_unix: 'desc'},
                limit: 4
            }
        })
    
    })
    
    const data = await res.json() as LaunchesQuery
    return data.docs

}

export const getLaunchesById = async (id: string) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
    const data = await res.json() as LaunchesQuery
    return data
}