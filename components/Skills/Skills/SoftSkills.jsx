import React from 'react'

export default function SoftSkills() {

    const softSkills = [
        {
            name: 'Teamwork',
            color: 'bg-blue-500',
            svg: 'https://cdn-icons-png.flaticon.com/512/7505/7505858.png'
        },
        {
            name: 'Communication',
            color: 'bg-blue-500',
            svg: '   https://cdn-icons-png.flaticon.com/512/610/610413.png '
        },
        {
            name: 'Problem Solving',
            color: 'bg-blue-500',
            svg: '     https://cdn-icons-png.flaticon.com/512/4133/4133589.png  '
        },
        {
            name: 'Time Management',
            color: 'bg-blue-500',
            svg: '   https://cdn-icons-png.flaticon.com/512/2382/2382564.png '
        },
        {
            name: 'Adaptability',
            color: 'bg-blue-500',
            svg: '   https://cdn-icons-png.flaticon.com/512/6159/6159679.png '
        },
        {
            name: 'Creativity',
            color: 'bg-blue-500',
            svg: '   https://cdn-icons-png.flaticon.com/512/3749/3749872.png '
        },
        {
            name: 'Leadership',
            color: 'bg-blue-500',
            svg: '   https://cdn-icons-png.flaticon.com/512/860/860430.png '
        },
        {
            name: 'Self Motivation',
            color: 'bg-blue-500',
            svg: '        https://cdn-icons-png.flaticon.com/512/3495/3495048.png  '
        },
        {
            name: 'Self Confidence',
            color: 'bg-blue-500',
            svg: '     https://cdn-icons-png.flaticon.com/512/4371/4371480.png '
        },
        {
            name: 'Self Discipline',
            color: 'bg-blue-500',
            svg: 'https://cdn-icons-png.flaticon.com/512/5433/5433993.png '
        },
        {
            name: 'Self Awareness',
            color: 'bg-blue-500',
            svg: '   https://cdn-icons-png.flaticon.com/512/6001/6001137.png '
        },

        {
            name: 'Self Esteem',
            color: 'bg-blue-500',
            svg: '      https://cdn-icons-png.flaticon.com/512/5572/5572331.png '
        },
        {
            name: 'Self Control',
            color: 'bg-blue-500',
            svg: '   https://cdn-icons-png.flaticon.com/512/6911/6911300.png '
        },
        {
            name: 'Self Reliance',
            color: 'bg-blue-500',
            svg: '      https://cdn-icons-png.flaticon.com/512/5352/5352328.png '
        },

    ]

    return (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {softSkills.map((skill, index) => (
                <div key={index} className='flex items-center justify-between p-3 bg-white rounded-lg shadow-md'>
                    <div className='flex items-center'>
                        {/* <div className='text-white bg-blue-200 rounded-full'> */}
                        {/* <svg className='w-6 h-6' fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24' stroke='currentColor'>
                                <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                                <path d='M12 14l-9 5 9 5 9-5-9-5z'></path>
                                <path d='M12 14L2 9l10-5 9 5-9 5z'></path>
                            </svg> */}
                        <img src={skill.svg
                            ? skill.svg
                            : 'https://img.icons8.com/color/48/000000/teamwork.png'} alt={skill.name} className={'h-10 w-h-10'} />
                        {/* </div> */}
                        <div className='ml-4'>
                            <div className='font-medium text-gray-700 text-md sm:text-lg'>{skill.name}</div>
                            <div className='text-sm font-medium text-gray-500'>{skill.level}</div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center justify-center w-4 h-4 text-sm text-white bg-blue-500 rounded-full'>
                            {skill.level}
                        </div>
                    </div>
                </div>
            ))}
        </div>


    )
}
