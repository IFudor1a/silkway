import React from 'react';
import {ProductArrow} from "../Materials/SVG";
import '../Styles/ProductRoute.scss';

const ProductRoute = () => {
    return (
        <div className='ProductRoute'>
            <div>
                Home {ProductArrow}
            </div>
            <div>
                Вкладка {ProductArrow}
            </div>
            <div>
                Вкладка {ProductArrow}
            </div>
            <div>
                Вкладка
            </div>
        </div>
    );
};

export default ProductRoute;