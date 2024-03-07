import Cpu from "./Cpu";
import Mem from "./Mem";
import Info from "./Info";

const Widget = () => {
  return (
    <>
      <div>Widget</div>
      <Cpu></Cpu>
      <Info></Info>
      <Mem></Mem>
    </>
  );
};

export default Widget;
