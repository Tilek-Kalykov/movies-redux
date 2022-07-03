import React from 'react';

const Top5List = ({data}) => {
    return (
        <div className='movies'>
            {
                data?.films?.map((el) =>(
                    <div key={el.id}>
                        <img className='img' src={el.img} alt="" />
                        <h3 className='h4'>{el.name}</h3>

                    </div>
                ))
            }
            
        </div>
    );
};

export default Top5List;