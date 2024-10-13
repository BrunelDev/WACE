import { useEffect, useState } from "react";
import { CircularChart } from "@/components/circularChart";
import Image from "next/image";
import { Status } from "@/components/status";
import { SummaryCard2 } from "@/components/summaryCards";
import { User } from "lucide-react";
import { getStock } from "@/lib/functions";
import {
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";
export function DashboardPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getStock().then((res) => {
      let temp = []
      res.results.forEach((item) => {
        temp.push({
          label: "Electronics",
      value: 300,
      color: "hsl(218, 70%, 50%)",
      id: "electronics",
      })
      setData(res.results);
    });
  });
  return (
    <div className="h-[100vh]">
      <div className="flex flex-wrap justify-between">
        <div className="w-[400px] h-fit">
          <SummaryCard2
            icon={<User color="black" />}
            content={[
              { title: "Téléphone", value: "+23480656506330" },
              { title: "Email", value: "janet.adebayo@gmail.com" },
            ]}
          />
        </div>
        <div className="w-[400px] h-fit">
          <SummaryCard2
            icon={<User color="black" />}
            content={[
              { title: "Téléphone", value: "+23480656506330" },
              { title: "Email", value: "janet.adebayo@gmail.com" },
            ]}
          />
        </div>
        <div className="w-[400px] h-fit">
          <SummaryCard2
            icon={<User color="black" />}
            content={[
              { title: "Téléphone", value: "+23480656506330" },
              { title: "Email", value: "janet.adebayo@gmail.com" },
            ]}
          />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="w-[64%] flex flex-col ">
          <div className="flex justify-between w-full">
            <div className="bg-white rounded shadow-sm w-fit h-fit flex justify-center items-center">
              <CircularChart data={data}/>
            </div>
            <div className="flex flex-col h-full w-[400px] space-y-1">
              <div className="w-full h-fit">
                <SummaryCard2
                  icon={<User color="black" />}
                  content={[
                    { title: "Téléphone", value: "+23480656506330" },
                    { title: "Email", value: "janet.adebayo@gmail.com" },
                  ]}
                />
              </div>
              <div className="w-full h-fit">
                <SummaryCard2
                  icon={<User color="black" />}
                  content={[
                    { title: "Téléphone", value: "+23480656506330" },
                    { title: "Email", value: "janet.adebayo@gmail.com" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-white rounded-md shadow-md mt-3 py-3">
            <Chart />
          </div>
        </div>

        <div className="w-[400px] h-fit">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}

const RecentOrders = () => {
  const orders = [
    {
      id: 1,
      price: 120000,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
    {
      id: 1,
      price: 1200,
      status: "En cours",
      article: "iPhone 13",
      image: "/iphone.png",
      date: "12 Sept 2022",
      quantity: 1,
    },
  ];
  return (
    <div className="bg-white rounded-sm shadow-sm p-4 w-full flex justify-center items-center">
      <div className="w-full">
        <h1 className="text-xl font-semibold">Commandes récentes</h1>
        <div className="space-y-[6px]">
          {orders.map((order, i) => {
            return (
              <div
                className="flex justify-between text-sm pb-2 border-b border-b-gray-100"
                key={i}
              >
                <div className="flex w-full">
                  <div className="flex space-x-3 w-full">
                    <Image
                      className="rounded-md shadow w-fit h-fit"
                      src={order.image}
                      width={49}
                      height={49}
                      alt="Item image"
                    />
                    <div className="flex flex-col space-y-1 w-fit">
                      <h6 className="text-gray-600 font-sans font-medium">
                        {order.article}
                      </h6>
                      <h2 className="font-semibold">
                        {order.price}FCFA x {order.quantity}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <h6 className="flex flex-col w-fit text-gray-400 text-nowrap">
                      {order.date}
                    </h6>
                    <Status
                      status={order.status}
                      className={`${
                        order.status === "Suspendu"
                          ? "text-[#CC5F5F] bg-[#fdf1f1]"
                          : order.status === "En cours"
                          ? "text-[#5570F1] bg-[#d9e0ff]"
                          : null
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Chart = () => {
  const pageData = [
    { name: "Page A", uv: 300, pv: 2600, amt: 3400 },
    { name: "Page B", uv: 400, pv: 4367, amt: 6400 },
    { name: "Page C", uv: 300, pv: 1398, amt: 2400 },
    { name: "Page D", uv: 200, pv: 9800, amt: 2400 },
    { name: "Page E", uv: 278, pv: 3908, amt: 2400 },
    { name: "Page F", uv: 189, pv: 4800, amt: 2400 },
    { name: "Page G", uv: 189, pv: 4800, amt: 2400 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={pageData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};
