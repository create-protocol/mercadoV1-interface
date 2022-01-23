import React from 'react'
import EachFilterCard from './EachFilterCard'
import PageHeader from './PageHeader'

const data = {
    rows: [
        {
            title: 'Title1',
            buttons: [{
                name: "Button1",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button3",
                url: "url12"
            },
            {
                name: "Button4",
                url: "url12"
            },
            {
                name: "Button5",
                url: "url12"
            },

            ]
        },
        {
            title: 'Title 2',
            buttons: [{
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            {
                name: "Button2",
                url: "url12"
            },
            ]

        },
    ],
}

const filterCard = () => {
    return (
        <div style={{ minHeight: '150vh' }}>
            <PageHeader title="Frequently Asked Questions" />
            <section className="container">
                {data.rows.map((_, index) => (
                    <EachFilterCard key={index} title={_.title} buttons={_.buttons} />
                ))}
            </section>
        </div>
    )
}

export default filterCard
