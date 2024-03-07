import Cpu from "./Cpu";
import Mem from "./Mem";
import Info from "./Info";

const Widget = ({ data }) => {
  const {
    macA,
    freeMem,
    totalMem,
    usedMem,
    memUseage,
    osType,
    upTime,
    cpuType,
    numCores,
    cpuSpeed,
    cpuLoad,
  } = data;
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
