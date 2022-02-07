import { Input, Select } from 'antd';

const CurrencyOptions = ({ onChangeCurrency, amount, onChangeAmount }) => {
   return (
      <div className="flex">
         <Input type={'number'} className="h-12 text-2xl" value={amount} onChange={onChangeAmount} />
         <Select defaultValue={'USD'} onSelect={onChangeCurrency}>
            <Select.Option value="USD">USD</Select.Option>
            <Select.Option value="RUB">RUB</Select.Option>
            <Select.Option value="GBP">GBP</Select.Option>
            <Select.Option value="UZS">UZS</Select.Option>
         </Select>
      </div>
   );
};

export default CurrencyOptions;
