import { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'

//  const data = [
//     ['Day', 'Sales'],
//     ['9', 1000],
//     ['10', 1170],
//     ['11', 660],
//     ['12', 1030],
// ]

 const options = {
    title: 'Sales Over Time',
    curveType: 'function',
    legend: { position: 'bottom' },
    series: [{ color: '#F43F5E' }],
}
const SalesLineChart = ({ data }) => {
    
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(()=>setLoading(false),2000)
    }, [])
    

    return (
        <>
            {loading ? (<p className='text-center items-center text-4xl front-bold text-green-600'>Loading...</p>) : (
                
                    data.length > 1 ? <Chart chartType='LineChart' width='100%' data={data} options={options} /> : 
                        <>
                            <p className='text-center items-center text-4xl front-bold text-green-600'>Loading...</p>
                        <p className='text-center items-center text-4xl front-bold text-red-600'>Not enough data available for this section</p>
                        </>
                
            )}
        </>
    )
}

export default SalesLineChart