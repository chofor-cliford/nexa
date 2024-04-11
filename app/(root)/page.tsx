import BarChart from "@/components/shared/BarChart";
import Cards from "@/components/shared/Cards";
import { CardList } from "@/constants";
import PropertyList from "@/components/shared/PropertyList";
import PropertyReferrals from "@/components/shared/PropertyReferrals";
import { getAllProperties } from "@/lib/actions/property.actions";
import { extractPropertyValues } from "@/lib/utils";

const HomePage = async () => {
  const propertyList = await getAllProperties();
  const properties = propertyList?.data?.data?.listings?.regular;

  let extractedValues: any = [];

  if (properties) {
    extractedValues = extractPropertyValues(properties);
  } else {
    // Handle the case where properties is undefined
    console.error("Properties are undefined.");
  }

  return (
    <div className="flex flex-col py-5 ml-10">
      <h1 className="font-bold text-xl">Dashboard</h1>
      <div className="flex py-5 gap-5 flex-row">
        {CardList.map((card) => (
          <Cards
            title={card.title}
            amount={card.amount}
            data={card.data}
            key={card.title}
          />
        ))}
      </div>

      <div className="flex w-full h-[363px] gap-5">
        <BarChart />
        <PropertyReferrals />
      </div>

      <PropertyList extratedValues={extractedValues} />
    </div>
  );
};

export default HomePage;
