import React, { useState, useEffect } from 'react';

export interface Subscription {
  id: string;
  name: string;
  monthlyCost: number;
  paymentDate: string;
}

interface SubscriptionFormProps {
  subscriptions: Subscription[];
  editingSubscriptionId: string | null;
  onSaveSubscription: (subscription: Omit<Subscription, 'id'>) => void;
  onCancelEdit: () => void;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({
  subscriptions,
  editingSubscriptionId,
  onSaveSubscription,
  onCancelEdit,
}) => {
  const [name, setName] = useState('');
  const [monthlyCost, setMonthlyCost] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  useEffect(() => {
    if (editingSubscriptionId) {
      const subscriptionToEdit = subscriptions.find(
        (sub) => sub.id === editingSubscriptionId
      );
      if (subscriptionToEdit) {
        setName(subscriptionToEdit.name);
        setMonthlyCost(subscriptionToEdit.monthlyCost.toString());
        setPaymentDate(subscriptionToEdit.paymentDate);
      }
    } else {
      setName('');
      setMonthlyCost('');
      setPaymentDate('');
    }
  }, [editingSubscriptionId, subscriptions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !monthlyCost || !paymentDate) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    onSaveSubscription({
      name,
      monthlyCost: parseFloat(monthlyCost),
      paymentDate,
    });
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
      <div className="flex space-x-2">
        <button
          type="submit"
          className={`w-full px-4 py-2 font-bold text-white rounded-md ${
            editingSubscriptionId ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {editingSubscriptionId ? '수정하기' : '추가하기'}
        </button>
        {editingSubscriptionId && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="w-full px-4 py-2 font-bold text-white bg-gray-500 rounded-md hover:bg-gray-600"
          >
            취소
          </button>
        )}
      </div>
    </form>
  );
};

export default SubscriptionForm;
