import { useState, useEffect } from 'react';
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
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">월간 구독 서비스 트래cker</h1>
        <SubscriptionForm
          onSaveSubscription={handleSaveSubscription}
          editingSubscriptionId={editingSubscriptionId}
          subscriptions={subscriptions}
          onCancelEdit={() => setEditingSubscriptionId(null)}
        />
        <div className="mt-8">
          <SubscriptionList
            subscriptions={subscriptions}
            onDeleteSubscription={handleDeleteSubscription}
            onEditClick={setEditingSubscriptionId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
