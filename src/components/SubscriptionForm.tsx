import React, { useState } from 'react';
import { Subscription } from '../types';

interface SubscriptionFormProps {
  onAddSubscription: (subscription: Omit<Subscription, 'id'>) => void;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ onAddSubscription }) => {
  const [name, setName] = useState('');
  const [monthlyCost, setMonthlyCost] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !monthlyCost || !paymentDate) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    onAddSubscription({
      name,
      monthlyCost: parseFloat(monthlyCost),
      paymentDate,
    });
    setName('');
    setMonthlyCost('');
    setPaymentDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">구독 이름</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md"
          placeholder="예: Netflix"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="monthlyCost" className="block text-sm font-medium text-gray-300">월별 비용</label>
        <input
          type="number"
          id="monthlyCost"
          value={monthlyCost}
          onChange={(e) => setMonthlyCost(e.target.value)}
          className="w-full p-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md"
          placeholder="예: 17000"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-300">결제일</label>
        <input
          type="text"
          id="paymentDate"
          value={paymentDate}
          onChange={(e) => setPaymentDate(e.target.value)}
          className="w-full p-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md"
          placeholder="예: 매월 5일"
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700">
        추가하기
      </button>
    </form>
  );
};

export default SubscriptionForm;
