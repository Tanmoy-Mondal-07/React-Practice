import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

const data = useLoaderData()

    // const [data, setdata] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Tanmoy-Mondal-07')
    //         .then(response => response.json())
    //         .then(data => {
    //             setdata(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Name:{data.login}<br />
            Github followers:{data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const gitloader = async () => {
    const response = await fetch('https://api.github.com/users/Tanmoy-Mondal-07')
    return response.json()
}