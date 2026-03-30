import FCard01 from "../cards/flip-flop/FCard01";
import InCard01 from "../cards/interactive/InCard01";
import Card01 from "../cards/simple/Card01";
import Card02 from "../cards/simple/Card02";
import Card03 from "../cards/simple/Card03";

export default function App() {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center items-center gap-8 px-6 py-4">
      <section className="w-full flex flex-col">
        <h1 className="title">simple cards</h1>
        <div className="w-full flex flex-wrap gap-6 ">
          <Card01 />
          <Card02 />
          <Card03 />
        </div>
      </section>

      <section className="w-full flex flex-col">
        <h1 className="title">interactive cards</h1>
        <div className="w-full flex flex-wrap gap-6 ">
          <InCard01 />
        </div>
      </section>

      <section className="w-full flex flex-col">
        <h1 className="title">flip-flop cards</h1>
        <div className="w-full flex flex-wrap gap-6 ">
          <FCard01 />
        </div>
      </section>
    </div>
  );
}
