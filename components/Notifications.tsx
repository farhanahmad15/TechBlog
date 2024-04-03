import React from 'react'
type Props = {
    title: string,
    description: string,
    date: Date
}
export default function Notifications({ title, description, date }: Props) {
    console.log(date)
    return (
        <>
            {/* TODO:MAKE IT SCROLLABLE */}
            <div className='border-b-[1px] border-b-accent p-2 max-w-96'>
                <p className='width-[50%] float-right mx-1'>{date.toLocaleDateString()}</p>
                <p className='font-bold width-[50%] mx-1'>{title.slice(0, 30)}</p>
                <p>{description.slice(0, 70)}</p>
            </div>
        </>
    )
}
