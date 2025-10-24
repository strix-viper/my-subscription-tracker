import Button from "./Button";

export interface Subscription {
  id: string;
  name: string;
  monthlyCost: number;
  paymentDate: string;
}

interface SubscriptionListProps {
  subscriptions: Subscription[];
  onDeleteSubscription: (id: string) => void;
  onEditClick: (id: string) => void;
}

const SubscriptionList = ({ subscriptions, onDeleteSubscription, onEditClick }: SubscriptionListProps) => {
  return (
    <div className="space-y-4">
      {subscriptions.map((subscription) => (
        <div key={subscription.id} className="p-6 mb-6 bg-white rounded-xl shadow-lg flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h3 className="text-xl font-bold">{subscription.name}</h3>
            <p className="text-2xl font-extrabold text-blue-600">Monthly Cost: ${subscription.monthlyCost}</p>
            <p>Payment Date: {subscription.paymentDate}</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-2 sm:mt-0">
            <Button
              variant="warning"
              onClick={() => onEditClick(subscription.id)}
            >
              수정
            </Button>
            <Button
              variant="danger"
              onClick={() => onDeleteSubscription(subscription.id)}
            >
              삭제
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionList;
