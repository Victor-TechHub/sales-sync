import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";

interface AnalyticsCardProps {
  title: string;
  amount: string;
  percentageRise: number | null;
  percentageFall: number | null;
  interval: string;
}

const AnalyticsCard = (props: AnalyticsCardProps) => {
  const { title, amount, percentageRise, percentageFall, interval } = props;

  const PercentagesRiseAndFall = () => (
    <>
      {percentageRise ? (
        <div className="flex gap-2 bg-green-50 text-green-600 rounded-md py-1 px-2 items-center">
          <AiOutlineRise size={19} />
          <span>{percentageRise}%</span>
        </div>
      ) : (
        <div className="flex gap-2 bg-red-50 text-red-600 rounded-md py-1 px-2 items-center">
          <AiOutlineFall size={19} />
          <span>{percentageFall}%</span>
        </div>
      )}
    </>
  );
  return (
    <div className="border rounded-lg flex-1 md:w-0 flex flex-col gap-4 overflow-clip">
      <div className="flex items-center justify-between p-3">
        <div>
          <p className="mb-2">{title}</p>
          <h4 className="text-2xl">${amount}</h4>
        </div>
        <PercentagesRiseAndFall />
      </div>
      <div className="bg-stone-100 text-stone-600 p-3">{interval}</div>
    </div>
  );
};

export default AnalyticsCard;
