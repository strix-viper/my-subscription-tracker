export interface Subscription {
  id: string;
  name: string;
  monthlyCost: number;
  paymentDate: string;
}

interface SubscriptionListProps {
  subscriptions: Subscription[];
}

const SubscriptionList = ({ subscriptions }: SubscriptionListProps) => {
  return (
    <div className="space-y-4">
      {subscriptions.map((subscription) => (
        <div key={subscription.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">{subscription.name}</h3>
            <p>Monthly Cost: ${subscription.monthlyCost}</p>
            <p>Payment Date: {subscription.paymentDate}</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              수정
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionList;
