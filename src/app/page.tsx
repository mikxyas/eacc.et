import Image from "next/image";



export default function Home() {
  // create a function that will approximate the font width of the screen

  return (
    <div style={{ height: "calc(100vh - 10vh)" }} className="flex flex-col items-center md:justify-center ">
      <pre className="text-green-600  mb-3 text-mp font-mono  flex whitespace-pre md:mt-0 mt-3  lg:text-sm">

        {` 
***********************************************************
███████╗    ██╗ █████╗  ██████╗ ██████╗   ███████╗████████╗
██╔════╝   ██╔╝██╔══██╗██╔════╝██╔════╝   ██╔════╝╚══██╔══╝
█████╗    ██╔╝ ███████║██║     ██║        █████╗     ██║   
██╔══╝   ██╔╝  ██╔══██║██║     ██║        ██╔══╝     ██║   
███████╗██╔╝   ██║  ██║╚██████╗╚██████╗██╗███████╗   ██║   
╚══════╝╚═╝    ╚═╝  ╚═╝ ╚═════╝ ╚═════╝╚═╝╚══════╝   ╚═╝   
***********************************************************
`}

      </pre>

      <pre className="text-4mp  md:text-3xs text-center">
        <code>
          <span className="text-green-600">
            {`;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;.
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.
&&&x;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;&&&&.
&&&;                                                                                         .$&&&.
&&&;                                                                                         .$&&&.
&&&;                                                                                         :$&&&.
&&&;                                                                                         :&&&&.
&&&;                                                                                         ;&&&&.
&&&;                                                                                         ;&&&&.
&&&;                                                                                         +&&&&.
&&&;                                                                                         +&&&&.
&&&;                                                                                         x&&&&.
&&&;                                                                                         X&&&&.
&&&;                                                                                         $&&&&.
&&&;                                                                                        :$&&&&.
&&&;                                                                                        ;&&&&&.`}
          </span>
          <span className="text-yellow-600">
            {`
&&&;                                                                                        +&&&&&.
&&&;                                                                                        X&&&&&.
&&&;                                                                                       :$&&&&&.
&&&;                                                                                       ;$&&&&&.
&&&;                                                                                       x&&&&&&.
&&&;                                                                                      .$&&&&&&.
&&&;                                                                                      ;$&&&&&&.
&&&;                                                                                      x&&&&&&&.
&&&;                                                                                     :$&&&&&&&.
&&&;                                                                                     +&&&&&&&&.
&&&;                                                                                    .X&&&&&&&&.
&&&;                                                                                    +$&&&&&&&&.
&&&;                                                                                   .X&&&&&&&&&.
&&&;                                                                                   +&&&&&&&&&&.
&&&;                                                                                  :$&&&&&&&&&&.
&&&;                                                                                 .X&&&&&&&&&&&.
&&&;                                                                                 +$&&&&&&&&&&&.`}
          </span>
          <span className="text-red-600">
            {`
&&&;                                                                                ;$&&&&&&&&&&&&.
&&&;                                                                               :$&&&&&&&&&&&&&.
&&&;                                                                              :X&&&&&&&&&&&&&&.
&&&;                                                                             :X&&&&&&&&&&&&&&&.
&&&;                                                                            :X&&&&&&&&&&&&&&&&.
&&&;                                                                           :X&&&&&&&&&&&&&&&&&.
&&&;                                                                          ;$&&&&&&&&&&&&&&&&&&.
&&&;                                                                        .+&&&&&&&&&&&&&&&&&&&&.
&&&;                                                                       ;X&&&&&&&&&&&&&&&&&&&&&.
&&&;                                                                     :x&&&&&&&&&&&&&&&&&&&&&&&.
&&&;                                                                   .+$&&&&&&&&&&&&&&&&&&&&&&&&.
&&&;                                                                 .+&&&&&&&&&&&&&&&&&&&&&&&&&&&.
&&&;                                                               :X&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.
&&&;                                                            :+$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.
&&&;                                                        .:+$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.
&&&;                                                    .:+X&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.
&&&;                                               ::;x$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.
&&&;                                      ...::+x$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.
&&&;                             .:;++X$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.
&&&$$$$$$$$$$$$$$$$$$$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`}
          </span>
        </code>
      </pre>



      <p className={` text-green-700 mt-2  text-center text-2xl`}> {`<`}BUILD FAST{`/>`}</p>


      {/* <p>accelerate the rate of making</p> */}
    </div>
  );
}
