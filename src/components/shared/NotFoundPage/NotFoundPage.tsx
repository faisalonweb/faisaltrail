import React from 'react';
import 'src/components/shared/NotFoundPage/NotFoundPage.scss'
import Logo404 from 'src/assets/images/Frame404.png';
const NotFoundPage = () => {
    return (
        <div className="not-page-found">
            <img src={Logo404} alt="not found page"/>
        </div>
    );
};

export default NotFoundPage;