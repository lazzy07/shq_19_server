class ConsoleStylingClass{
  static run(){
    console.log("######          2019 MAR 17      ######");
    console.log("###            SHQ 2019        ###");
    console.log("###         "+new Date().toLocaleString()+"      ###")
    console.log("\nCreated by @lazzy07");
    console.log("________________________________________\n");
  }

  static finish(){
    console.log("________________________________________");
    console.log("finished @ "+new Date().toLocaleString()+" ###\n\n\n");
  }
}

export default ConsoleStylingClass;