import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to THREE-DEE Print Shop',
    description: 'Taking care of all your 3-D Printing needs',
    keywords: '3-D Printing, printing supplies'
}

export default Meta