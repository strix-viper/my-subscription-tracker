import { useState, useEffect, useMemo } from 'react';
import SubscriptionForm from './components/SubscriptionForm';
import SubscriptionList from './components/SubscriptionList';

export interface Subscription {
  id: string;
  name: string;
  monthlyCost: number;
  paymentDate: string;
}

function App() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [editingSubscriptionId, setEditingSubscriptionId] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string>('recent'); // New state for sorting

  // Load subscriptions from LocalStorage on initial render
  useEffect(() => {
    const storedSubscriptions = localStorage.getItem('subscriptions');
    if (storedSubscriptions) {
      setSubscriptions(JSON.parse(storedSubscriptions));
    }
  }, []);

  // Save subscriptions to LocalStorage whenever the subscriptions state changes
  useEffect(() => {
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  }, [subscriptions]);

  const totalMonthlyCost = useMemo(() => {
    return subscriptions.reduce((sum, sub) => sum + sub.monthlyCost, 0);
  }, [subscriptions]);

  const sortedSubscriptions = useMemo(() => {
    let sortableSubscriptions = [...subscriptions]; // Create a copy to avoid mutating original state

    if (sortOrder === 'highCost') {
      sortableSubscriptions.sort((a, b) => b.monthlyCost - a.monthlyCost);
    } else if (sortOrder === 'lowCost') {
      sortableSubscriptions.sort((a, b) => a.monthlyCost - b.monthlyCost);
    }
    // 'recent' or any other value will return the default order (which is already handled by how new subscriptions are added)
    return sortableSubscriptions;
  }, [subscriptions, sortOrder]);

  const handleSaveSubscription = (subscription: Omit<Subscription, 'id'>) => {
    if (editingSubscriptionId) {
      // Edit mode
      setSubscriptions(
        subscriptions.map((sub) =>
          sub.id === editingSubscriptionId ? { ...sub, ...subscription, id: editingSubscriptionId } : sub
        )
      );
    } else {
      // Add mode
      const newSubscription: Subscription = {
        id: crypto.randomUUID(),
        ...subscription,
      };
      setSubscriptions([newSubscription, ...subscriptions]);
    }
    setEditingSubscriptionId(null); // Exit edit mode
  };

  const handleDeleteSubscription = (id: string) => {
    setSubscriptions(subscriptions.filter((sub) => sub.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-lg mx-auto p-6">
        <h1 className="text-4xl font-bold flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
          월간 구독 서비스 트래커
          <div className="text-xl text-cyan-600">월 총 지출액: {totalMonthlyCost}원</div>
        </h1>
        <SubscriptionForm
          onSaveSubscription={handleSaveSubscription}
          editingSubscriptionId={editingSubscriptionId}
          subscriptions={subscriptions}
          onCancelEdit={() => setEditingSubscriptionId(null)}
        />
        <div className="flex justify-end items-center mb-4 mt-4">
          <label htmlFor="sortOrder" className="text-gray-600 mr-2">정렬 기준:</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-white text-gray-800 p-2 rounded border border-gray-300"
          >
            <option value="recent">최신순</option>
            <option value="highCost">비용 높은 순</option>
            <option value="lowCost">비용 낮은 순</option>
          </select>
        </div>
        <div className="mt-8">
          <SubscriptionList
            subscriptions={sortedSubscriptions} // Pass sorted subscriptions
            onDeleteSubscription={handleDeleteSubscription}
            onEditClick={setEditingSubscriptionId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
