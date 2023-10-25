import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const [serviceDetails, setServiceDetails] = useState({})
    const { id } = useParams()
    const details = useLoaderData()
   console.log(id)
   console.log(details)
    useEffect(() => {
        const detail = details?.find(detail => id == detail.id)
        setServiceDetails(detail)

    }, [id])
    return (
        <div className="card max-w-2xl mx-auto mt-10 glass">
            <figure><img src={serviceDetails.image} alt="car!" /></figure>
            <div className="card-body">
              <div className="flex">
              <h2 className="card-title">{serviceDetails.serviceName}</h2>
              <p className="text-xl font-semibold text-end">Price:{serviceDetails.price}</p>
              </div>
                <p>{serviceDetails.description}</p>
                <div className="card-actions justify-center mt-5">
                    <button className="btn btn-primary">book now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;