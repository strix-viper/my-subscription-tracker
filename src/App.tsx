import { useState, useEffect } from 'react';
import { Subscription } from './types';
import SubscriptionForm from './components/SubscriptionForm';

function App() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

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

  const onAddSubscription = (subscription: Omit<Subscription, 'id'>) => {
    const newSubscription: Subscription = {
      id: crypto.randomUUID(),
      ...subscription,
    };
    setSubscriptions([newSubscription, ...subscriptions]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">월간 구독 서비스 트래커</h1>
        <SubscriptionForm onAddSubscription={onAddSubscription} />
        {/* Subscription list will go here */}
      </div>
    </div>
  );
}

export default App;
