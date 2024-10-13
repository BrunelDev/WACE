import React from "react";

const infos = [
  { title: "Tous les clients", data: "1250", percentage: "+15.80%" },
  { title: "Actifs", data: "1250", percentage: "+15.80%" },
  { title: "Inactifs", data: "1250", percentage: "+15.80%" },
];
export function SummaryCard1({ icon, title }) {
  return (
    <div className="max-w-[450px] mb-3 bg-white shadow rounded-lg p-3 text-gray-400">
      <div className="flex justify-between mb-8">
        <div className="p-1 bg-[#f0e3d4] rounded-md">
          {icon}
          {title ? title : null}
        </div>
        <span>Cette semaine</span>
      </div>
      <div className="flex space-x-10">
        {infos.map((info, i) => {
          return (
            <div className="flex flex-col" key={i}>
              <span>{info.title}</span>
              <div className="space-x-2">
                <span className="text-xl font-semibold">{info.data}</span>
                <span className="text-green-400 text-base">
                  {info.percentage}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SummaryCard2({ icon, iconBg, title, content }) {
  return (
    <div className="max-w-[800px] mb-4 bg-white rounded-lg shadow p-3 text-gray-400">
      <div className="flex justify-between mb-8">
        <div className={`p-1 ${iconBg ? iconBg : "bg-[#f0e3d4]"} rounded-md`}>
          {icon}
          {title ? title : null}
        </div>
        <span>Cette semaine</span>
      </div>
      <div className="flex space-x-10">
        {content.map((content, i) => {
          return (
            <div className="flex flex-col" key={i}>
              <span className="text-gray-400 text-sm">{content.title}</span>
              <div className="space-x-2">
                <span className="font-semibold text-black text-base">
                  {content.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
