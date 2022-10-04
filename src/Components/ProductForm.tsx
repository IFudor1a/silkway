import React from 'react';
import '../Styles/ProductForm.scss';
import {ProductStarIcon} from "../Materials/SVG";

const ProductForm = () => {
    return (
        <div className='ProductForm'>
            <HeaderLabel/>
            <AdditionalInfo/>
            <OptionsTake/>
        </div>
    );
};

const HeaderLabel = () => {
   return (
       <div className='HeaderLabel'>
           <h4>
               Private label best strong skin bleaching lightening cream foot full body glutathione kojic acid whitening cream for black skin
           </h4>
           <div className='Category'>
               Категория: Косметика
           </div>
           <div className='Rating'>
               <div className='star'>
                   {ProductStarIcon}
                   {ProductStarIcon}
                   {ProductStarIcon}
                   {ProductStarIcon}
                   {ProductStarIcon}
                   5.0
               </div>
               <div>
                   12 отзывов
               </div>
               <div>
                   24 покупателя
               </div>
           </div>
           <p>
               Идейные соображения высшего порядка, а также перспективное планирование в значительной степени обусловливает важность экспериментов, поражающих по своей масштабности и грандиозности. Для современного мира социально-экономическое развитие в значительной степени обусловливает важность переосмысления внешнеэкономических политик.
           </p>
           <hr/>
       </div>
   )
}

const AdditionalInfo = () => {
    return (
        <div className='AdditionalInfo'>
            <div className='CountRule'>
                <div className='Rule'>
                    <div className='Count'>
                        10-999 Штук
                    </div>
                    <div className='Price'>
                        $65 - $80
                    </div>
                </div>
                <div className='Rule'>
                    <div className='Count'>
                        1000-4999 Штук
                    </div>
                    <div className='Price'>
                        $55 - $70
                    </div>
                </div>
                <div className='Rule'>
                    <div className='Count'>
                        Больше 4999 Штук
                    </div>
                    <div className='Price'>
                        $35 - $50
                    </div>
                </div>
            </div>
            <hr/>
             <div className='Colors'>
                 <div className='color'>
                     <div>Цвет 1:</div>
                     <div className='colorbox' style={{backgroundColor: '#76777E'}}/>
                 </div>
                 <div className='color' >
                     <div>Цвет 2:</div>
                     <div className='colorbox' style={{backgroundColor: '#FF9B9B'}}/>
                 </div>
                 <div className='color'>
                     <div>Цвет 3:</div>
                     <div className='colorbox' style={{backgroundColor: '#FFD699'}}/>
                 </div>
             </div>
             <div className='Addition'>
                 <h3>Дополнительная информация</h3>
                 <div className='address'>
                     Казахстан, г.Нур-султан, Малайсары 37
                 </div>
                 <div className='number'>
                     +7 (777) 777-77-77
                 </div>
                 <div className='email'>
                     tooNuras@gmail.com
                 </div>
             </div>
        </div>
    )
}

const OptionsTake = () => {
    return (
        <div className='OptionsTake'>

        </div>
    )
}

export default ProductForm;