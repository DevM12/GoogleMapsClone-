
import type { Place } from "../api/Place"
import { useState } from "react"

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
    const [term, setTerm] = useState('')
    const [places, setPlaces] = useState<Place[]>([]);

const handleSubmit=async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="term" className="font-bold">Search</label>
                <input type="text" className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full" id="term" value={term} onChange={e => setTerm(e.target.value)} />

            </form>
        </div>
    )
}