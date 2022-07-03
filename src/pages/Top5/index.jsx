import React from 'react';
import { useSelector } from 'react-redux';
import Top5List from '../../components/Top5List/index';


const Top5 = () => {
    const data = useSelector(state => state.top5Page)
    return (
        <div>
            
            <Top5List data={data}/>
            
            
        </div>
    );
};

export default Top5;