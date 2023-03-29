import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);
    const [singleData , setSingleData] = useState({})
    const [showAll, setShowAll] = useState(false);
    const [uniqueId , setUniqueId] = useState(null);
 

    const handleShowAll = () => {
        setShowAll(true);
    }

    useEffect(() => {
        fetch(` https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res => res.json())
        .then(data => setSingleData(data.data))
    } ,[uniqueId])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            setData(value.data.tools)
        }
        loadData();
    }, [])
    console.log(singleData);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6'>
                {
                    data.slice(0, showAll ? 12 : 6).map(singleData =>
                        <SingleData
                            key={singleData.id}
                            singleData={singleData}
                           setUniqueId ={setUniqueId}
                        />
                    )
                }
            </div>
            {
                !showAll && (
                    <span onClick={handleShowAll}>
                        <Button>See More</Button>
                    </span>
                )
            }
            <Modal singleData={singleData}/>
        </div>
    );
};

export default Card;