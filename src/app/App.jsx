import Card01 from "../cards/simple/Card01";
import Card02 from "../cards/simple/Card02";
import Card03 from "../cards/simple/Card03";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center gap-6 px-6">
      <div className="w-full flex flex-col">
        <h1 className="text-2xl font-medium pb-4 capitalize">simple cards</h1>
        <div className="w-full flex flex-wrap gap-6 ">
          <Card01 />
          <Card02 />
          <Card03 />
        </div>
      </div>


    </div>
  );
}
