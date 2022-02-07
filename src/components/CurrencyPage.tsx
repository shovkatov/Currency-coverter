import CurrencyExchangeOutlined from '@mui/icons-material/CurrencyExchangeOutlined';
import { Button } from '@mui/material';
import { message, Popconfirm } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendToStore } from '../redux/actions/historyAction';
import { getResult } from '../redux/actions/optionAction';
import { stateHook } from '../redux/stateHook';
import CurrencyOptions from './CurrencyOptions';
import News from './News';

const CurrencyPage = () => {
   const dispatch = useDispatch();
   const { result } = stateHook((state) => state.result);
   const [fromCurrency, setFromCurrency] = useState<string>('USD');
   const [toCurrency, setToCurrency] = useState<string>('USD');
   const [amount, setAmount] = useState<any>(0);
   const [amountFromCurrency, setAmountFromCurrency] = useState<boolean>(true);

   let toAmount, fromAmount;
   if (amountFromCurrency) {
      fromAmount = amount;
      toAmount = amount * result;
   } else {
      toAmount = amount;
      fromAmount = amount / result;
   }

   const handleToStore = () => {
      dispatch(
         sendToStore({
            fromCurrency,
            toCurrency,
            result,
            amount,
            date: new Date(),
         })
      );
   };

   useEffect(() => {
      if (toCurrency !== undefined && toCurrency !== undefined) {
         dispatch(getResult(fromCurrency, toCurrency));
      }
   }, [fromCurrency, toCurrency, amount]);

   function handleFromAmount(e: React.ChangeEvent<HTMLInputElement>) {
      setAmount(e.target.value);
      setAmountFromCurrency(true);
   }

   function handleToAmount(e: React.ChangeEvent<HTMLInputElement>) {
      setAmount(e.target.value);
      setAmountFromCurrency(false);
   }

   function confirm() {
      handleToStore();
      message.success('Saved');
   }

   function cancel() {
      message.error('Cancelled');
   }

   return (
      <div className="box bg-gradient-to-r from-blue-200 to-white min-h-screen flex flex-col items-center py-8">
         <div className="box_wrap">
            <CurrencyOptions
               onChangeAmount={handleFromAmount}
               amount={fromAmount}
               onChangeCurrency={(e: string) => setFromCurrency(e)}
            />
            <CurrencyExchangeOutlined color="primary" fontSize="large" />
            <CurrencyOptions
               onChangeAmount={handleToAmount}
               amount={toAmount}
               onChangeCurrency={(e: string) => setToCurrency(e)}
            />
            <Popconfirm title="Are you want to save ?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
               <Button variant="contained">SAVE</Button>
            </Popconfirm>
         </div>
         <News />
      </div>
   );
};

export default CurrencyPage;
