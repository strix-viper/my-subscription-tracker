import React, { useState, useEffect } from 'react';
import Button from './Button'; // Import Button component
import CurrencyInput from './CurrencyInput';

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
  const [monthlyCost, setMonthlyCost] = useState(0);
  const [paymentDate, setPaymentDate] = useState('');

  useEffect(() => {
    if (editingSubscriptionId) {
      const subscriptionToEdit = subscriptions.find(
        (sub) => sub.id === editingSubscriptionId
      );
      if (subscriptionToEdit) {
        setName(subscriptionToEdit.name);
        setMonthlyCost(subscriptionToEdit.monthlyCost);
        setPaymentDate(subscriptionToEdit.paymentDate);
      }
    } else {
      setName('');
      setMonthlyCost(0);
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
      monthlyCost,
      paymentDate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 mb-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">새 구독 추가</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">구독 이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mt-1 text-gray-800 bg-gray-50 border border-gray-200 rounded-md"
            placeholder="예: Netflix"
          />
        </div>
        <div>
          <label htmlFor="monthlyCost" className="block text-sm font-medium text-gray-600">월별 비용</label>
          <CurrencyInput
            id="monthlyCost"
            value={monthlyCost}
            onChange={setMonthlyCost}
            placeholder="예: 17000"
            className="w-full p-2 mt-1 text-gray-800 bg-gray-50 border border-gray-200 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-600">결제일</label>
          <input
            type="text"
            id="paymentDate"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            className="w-full p-2 mt-1 text-gray-800 bg-gray-50 border border-gray-200 rounded-md"
            placeholder="예: 매월 5일"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
        <Button
          type="submit"
          variant={editingSubscriptionId ? 'success' : 'primary'}
          className="w-full"
        >
          {editingSubscriptionId ? '수정하기' : '추가하기'}
        </Button>
        {editingSubscriptionId && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancelEdit}
            className="w-full"
          >
            취소
          </Button>
        )}
      </div>
    </form>
  );
};

export default SubscriptionForm;
