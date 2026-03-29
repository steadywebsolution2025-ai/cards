import Card01 from "../cards/Card01";
import Card02 from "../cards/Card02";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center gap-6">
      <Card01 />
      <Card02 />
    </div>
  );
}
