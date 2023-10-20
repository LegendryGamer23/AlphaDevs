"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="mt-24">
      <div>
        <div className=" text-indigo-700  font-semibold pt-3  text-center">
          Pricing
        </div>
        <div className="font-extrabold pt-2  text-[50px] text-[#101826] text-center">
          Pricing plans for teams of all sizes
        </div>
        <div className="text-center text-lg pt-4 text-gray-500 ">
          {""}
          Choose an affordable plan that's packed with the best features for
          engaging
          <br></br>
          your audience, creating customer loyalty, and driving sales.
        </div>
        <div className="flex justify-center items-center mt-[50px] ">
          <div className="grid grid-cols-2 p-[3px] gap-2  items-center  rounded-[30px] border border-[#E4E7EA] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100">
            <div className="bg-[#4E46E4]  text-slate-50 px-[8px] py-[5px] font-bold rounded-[30px] text-[12px] cursor-pointer ">
              Monthly
            </div>
            <div className="flex text-[12px] justify-around text-[#6B7381] cursor-pointer font-bold">
              Annually
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-4 ml-16  ">
          <div className="h-[450px] w-[240px] border border-[#E4E7EA] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150 rounded-2xl mt-[30px] flex flex-wrap flex-col     ">
            <div className="  ml-[28px] pt-[20px]">
              <div className=" text-slate-900 font-semibold">Hobby</div>
              <div className="pt-[18px]  text-[12px] text-gray-700">
                The essentials to provide your<br></br> best work for clients.
              </div>
              <div className="pt-[21px]">
                <span className=" text-3xl font-extrabold">$15</span>
                <span className="text-[12px]  text-gray-700">/month</span>
              </div>
              <div className=" h-[30px] rounded-md w-[180px] border border-[#E4E7EA] mt-[20px] text-center">
                <button className="  text-indigo-900 font-semibold">
                  Buy plan
                </button>
              </div>
              <div className=" mt-[30px]">
                <p className="flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">5 products</span>
                </p>
                <p className="mt-[12px] flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">
                    Up to 1000 subscribers
                  </span>
                </p>
                <p className="mt-[12px] flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">Basic analytics</span>
                </p>
              </div>
            </div>
          </div>

          <div className="   h-[450px] w-[240px] border border-[#E4E7EA] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-150 rounded-xl mt-[30px] flex flex-wrap  flex-col  ">
            <div className="  ml-[28px] pt-[20px]">
              <div className=" text-slate-900 font-semibold">Freelancer</div>
              <div className="pt-[18px]  text-[12px] text-gray-700">
                The essentials to provide your<br></br> best work for clients.
              </div>
              <div className="pt-[21px]">
                <span className=" text-3xl font-extrabold">$30</span>
                <span className="text-[12px]  text-gray-700">/month</span>
              </div>
              <div className=" h-[30px] rounded-md w-[180px] border border-[#E4E7EA] mt-[20px] text-center">
                <button className="  text-indigo-900 font-semibold">
                  Buy plan
                </button>
              </div>
              <div className=" mt-[30px]">
                <p className="flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">5 products</span>
                </p>
                <p className="mt-[12px] flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">
                    Up to 1000 subscribers
                  </span>
                </p>
                <p className="mt-[12px] flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">Basic analytics</span>
                </p>
                <p className="mt-[12px]  flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">
                    48-hour support response
                  </span>
                </p>
                <p className="text-xs ml-[20px]">time</p>
              </div>
            </div>
          </div>

          <div className="   h-[450px] w-[240px] border-[2px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-150 border-[#4E46E4] rounded-xl mt-[30px]  flex flex-wrap flex-col">
            <div className="  ml-[28px] pt-[20px]">
              <div className=" text-indigo-700 font-semibold">Startup</div>
              <div className="pt-[18px]  text-[12px] text-gray-700">
                A plan that scales with your<br></br> rapidly growing business.
              </div>
              <div className="pt-[21px]">
                <span className=" text-3xl font-extrabold">$60</span>
                <span className="text-[12px]  text-gray-700">/month</span>
              </div>
              <div className=" h-[30px] rounded-md w-[180px] border border-indigo-700  hover:bg-indigo-500 bg-indigo-600 items-center mt-[20px] text-center">
                <button className="text-[12px]  text-white font-[600]">
                  Buy plan
                </button>
              </div>
              <div className=" mt-[30px]">
                <p className="flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">25 products</span>
                </p>
                <p className="mt-[12px] flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">
                    Up to 10000 subscribers
                  </span>
                </p>
                <p className="mt-[12px] flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">Advanced analytics</span>
                </p>
                <p className="mt-[12px]  flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">
                    24-hour support response
                  </span>
                </p>
                <p className="text-xs ml-[20px]">time</p>
                <p className="mt-[12px] flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">
                    Marketing automations
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="   h-[450px] w-[240px] border  border-[#E4E7EA] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-150 rounded-xl mt-[30px]  flex flex-wrap  flex-col mr-11  ">
            <div className="  ml-[28px] pt-[20px]">
              <div className=" text-black font-semibold">Enterprise</div>
              <div className="pt-[18px]  text-[12px] text-gray-700">
                Dedicated support and<br></br> infrastructure for your company.
              </div>
              <div className="pt-[21px]">
                <span className=" text-3xl font-extrabold">$90</span>
                <span className="text-[12px]  text-gray-700">/month</span>
              </div>

              <div className=" h-[30px] rounded-md w-[180px] border border-[#E4E7EA]  items-center mt-[20px] text-center">
                <button className=" text-indigo-700 font-semibold">
                  Buy plan
                </button>
              </div>
              <div className=" mt-[30px]">
                <p className="flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">Unlimited products</span>
                </p>
                <p className="mt-[12px] flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">
                    Unlimited subscribers
                  </span>
                </p>
                <p className="mt-[12px] flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">Advanced analytics</span>
                </p>
                <p className="mt-[12px]  flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">
                    1-hour, dedicated support
                  </span>
                </p>
                <p className="text-xs ml-[20px]">response time</p>
                <p className="mt-[12px] flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">
                    Marketing automations
                  </span>
                </p>
                <p className="mt-[12px] flex">
                  <img
                    height={2}
                    width={10}
                    src="https://w7.pngwing.com/pngs/377/304/png-transparent-purple-violet-qigong-lilac-tick-purple-angle-violet.png"
                    alt=""
                  />
                  <span className=" text-xs ml-[10px]">
                    Custom reporting tools
                  </span>
                </p>
              </div>
            </div>{" "}
          </div>
        </div>

        <div className=" flex  justify-around mt-[50PX] cursor-pointer">
          <img
            className=" sm:hidden  npm  md:flex"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt=""
          />

          <img
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt=""
          />

          <img
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt=""
          />

          <img
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt=""
          />

          <img
            className="sm:hidden  md:flex "
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
