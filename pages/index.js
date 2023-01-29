import Header from "@/components/Header";
import Chart from "@/components/HomeComp/Chart";
import Sales from "@/components/HomeComp/Sales";
import TopCards from "@/components/HomeComp/TopCards";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>User Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-200">
        <Header />
        <TopCards />
        <div className="grid grid-cols-1 lg:grid-cols-5 p-4">
          <Chart />
          <Sales />
        </div>
      </main>
    </>
  );
}
