import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrencies } from '../redux/actions/newsAction';
import { stateHook } from '../redux/stateHook';

const News = () => {
   const { allCurrency } = stateHook((state) => state.currencies);
   const dispatch = useDispatch();

   const newKeys: Array<string> = [...Object.keys(allCurrency)];
   const newValues: Array<number>= [...Object.values(allCurrency)];

   useEffect(() => {
      dispatch(getCurrencies('USD'));
   }, [dispatch]);

   return (
      <div className="news">
         {newKeys.map((c, i) => (
            <div key={i} className="news_wrap">
               <h3>
                  <span>{c}</span> {newValues[i]}
               </h3>
            </div>
         ))}
      </div>
   );
};

export default News;
