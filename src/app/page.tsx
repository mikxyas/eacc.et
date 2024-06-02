import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-lvh">
      <pre className="text-green-600 text-2xs md:text-md lg:text-lg">
        <code>
          {` 
***********************************************************
███████╗    ██╗ █████╗  ██████╗ ██████╗   ███████╗████████╗
██╔════╝   ██╔╝██╔══██╗██╔════╝██╔════╝   ██╔════╝╚══██╔══╝
█████╗    ██╔╝ ███████║██║     ██║        █████╗     ██║   
██╔══╝   ██╔╝  ██╔══██║██║     ██║        ██╔══╝     ██║   
███████╗██╔╝   ██║  ██║╚██████╗╚██████╗██╗███████╗   ██║   
╚══════╝╚═╝    ╚═╝  ╚═╝ ╚═════╝ ╚═════╝╚═╝╚══════╝   ╚═╝   
***********************************************************`}
        </code>
      </pre>
      <p className="text-green-600 font-mono text-2xl">🚀🚀🚀</p>
    </div>
  );
}
