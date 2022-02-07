import { Card } from 'antd';
import { stateHook } from '../redux/stateHook';

const HistoryPage = () => {
   const { histories } = stateHook((state) => state.history);

   return (
      <div className="history bg-gradient-to-r from-indigo-400 min-h-screen py-6 px-20">
         {histories.map((i, k) => (
            <div key={k} className="history_wrap mr-4">
               <Card style={{ width: 420, height: 150 }}>
                  <p>{i.date.toString()}</p>
                  <p>{`${i.amount} ${i.fromCurrency} = ${i.result * i.amount} ${i.toCurrency}`}</p>
               </Card>
            </div>
         ))}
      </div>
   );
};

export default HistoryPage;
