const os = require("os");

const cpuAverage = () => {
  const cpus = os.cpus();
  //cpus is an array of all cores. We need the average of all the cores which
  //will give us the cpu average.
  let idleMs = 0; //idle milliseconds
  let totalMs = 0; //total milliseconds
  //loop through each core (thread)
  cpus.forEach((aCore) => {
    //loop through each property of the current core
    for (mode in aCore.times) {
      //we need all modes for this core added to totalMs
      totalMs += aCore.times[mode];
    }
    //we need idle mode for this core added to idleMs
    idleMs += aCore.times.idle;
  });
  return {
    idle: idleMs / cpus.length,
    total: totalMs / cpus.length,
  };
};

const getCpuLoad = () =>
  new Promise((resolve, reject) => {
    //call cpuAverage for "now"
    const start = cpuAverage(); //"now" value of load
    setTimeout(() => {
      //call cpuAverage for "end" 100ms after "now"
      const end = cpuAverage(); //"end" value of load
      const idleDiff = end.idle - start.idle;
      const totalDiff = end.total - start.total;
      // console.log(idleDiff,totalDiff)
      // calculate the % of the used cpu
      const percentOfCpu = 100 - Math.floor((100 * idleDiff) / totalDiff); //%
      resolve(percentOfCpu);
    }, 100);
  });

// const performanceLoadData = () =>
//   new Promise(async (resolve, reject) => {
//     const cpus = os.cpus(); //all cpus as an array

//     const totalMem = os.totalmem(); //in bytes
//     // - free
//     const freeMem = os.freemem(); //in bytes
//     // - memory useage
//     const usedMem = totalMem - freeMem;
//     const memUseage = Math.floor((usedMem / totalMem) * 100) / 100; //2 decimal places
//     // - OS type
//     const osType = os.type() === "Darwin" ? "Mac" : os.type();
//     // console.log(osType)
//     // - uptime
//     const upTime = os.uptime();

//     // - CPU info
//     // -Cpu Type
//     const cpuType = cpus[0].model;
//     // - Number of cores
//     const numCores = cpus.length;
//     // - Clock Speed
//     const cpuSpeed = cpus[0].speed;

//     const cpuLoad = await getCpuLoad();
//     resolve({
//       freeMem,
//       totalMem,
//       usedMem,
//       memUseage,
//       osType,
//       upTime,
//       cpuType,
//       numCores,
//       cpuSpeed,
//       cpuLoad,
//     });
//   });

const performanceLoadData = async () => {
  const cpus = os.cpus();

  const totalMem = os.totalmem(); //in bytes

  const freeMem = os.freemem(); //in bytes
  // - memory useage
  const usedMem = totalMem - freeMem;
  const memUseage = Math.floor((usedMem / totalMem) * 100) / 100; //2 decimal places

  const osType = os.type() === "Darwin" ? "Mac" : os.type();

  // - uptime
  const upTime = os.uptime();

  // - CPU info
  // -Cpu Type
  const cpuType = cpus[0].model;
  // - Number of cores
  const numCores = cpus.length;
  // - Clock Speed
  const cpuSpeed = cpus[0].speed;

  const cpuLoad = await getCpuLoad();
  return {
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
  };
};

const run = async () => {
  const data = await performanceLoadData();
  console.log(data);
};
run();
