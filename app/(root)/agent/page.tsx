import AgentCard from "@/components/shared/AgentCard";
import PageHeader from "@/components/shared/PageHeader";
import PaginationComponent from "@/components/shared/PaginationComponent";
import { AgentDetails } from "@/public/assets";

const Agent = () => {
  return (
    <div className="py-5 ml-5 flex flex-col gap-10 h-full w-[1145px]">
      <PageHeader href="/agent/2/new-agent" title="Agents" />
      <div className="bg-[#FCFCFC] h-[991px] rounded-[10px] w-[1145px]">
        <div className="p-5 w-full h-full gap-5 flex flex-col">

        {AgentDetails.map((agent) => (
          <AgentCard
          key={agent.name}
          name={agent.name}
            email={agent.email}
            imageUrl={agent.imageUrl}
            address={agent.address}
            type={agent.type}
            phoneNumber={agent.phoneNumber}
            propertyNumber={agent.propertyNumber}
          />
        ))}
      </div>
            </div>
      <PaginationComponent title="Agents" />
    </div>
  );
};

export default Agent;
