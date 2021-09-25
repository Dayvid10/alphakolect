import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Profit"
                  statTitle="₦14,897"
               
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Customers"
                  statTitle="2,356"

                  statIconName="fas fa-users"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Income (Monthly)"
                  statTitle="₦1500"
               //   statArrow="down"
               //   statPercent="1.10"
               //   statPercentColor="text-orange-500"
               //   statDescripiron="Since yesterday"
                  statIconName="fas fa-cubes"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Customers Balance"
                  statTitle="₦77,665"
              //    statArrow="up"
              //    statPercent="12"
              //    statPercentColor="text-emerald-500"
              //    statDescripiron="Since last month"
                  statIconName="fas fa-signal"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
