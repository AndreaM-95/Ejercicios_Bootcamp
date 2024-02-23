
const Table = () => {
    const data = [
        {name: 'Fernando Herrera', country: 'Uruguay', bio: 'Sofware developer and CEO - DevT'},
        {name: 'Ada Lovelace', country: 'Great Britain', bio:'First women developer'},
        {name: 'Catalina Umaña', country: 'Colombia', bio:'Software engineer and lead developer at Google'}
    ];

    return(
        <table className='table-auto w-full shadow-lg shadow-indigo-900/60'>
            <caption className='w-full my-4 text-xl font-bold text-amber-700 italic caption-bottom'>Table 1. Developers List</caption>
            <thead>
                <tr>
                    <th className='bg-amber-700 text-white w-64 font-bold py-3 border-2 border-amber-400'>NAME</th>
                    <th className='bg-amber-700 text-white w-64 font-bold py-3 border-2 border-amber-400'>COUNTRY</th>
                    <th className='bg-amber-700 text-white w-96 font-bold py-3 border-2 border-amber-400'>BIOGRAPHY</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row)=>(
                    <tr key = {row.id}>
                        <td className='bg-amber-100 py-4 border-2 border-amber-500 text-base'>{row.name}</td>
                        <td className='bg-amber-100 py-4 border-2 border-amber-500 text-base'>{row.country}</td>
                        <td className='bg-amber-100 py-4 border-2 border-amber-500 text-base'>{row.bio}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;