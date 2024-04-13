"use client";
import React,{useState,useRef} from 'react'

const page = () => {
    const [grpw, setGrpw] = useState(40);
    const [payRate, setPayRate] = useState(10);
    const [absenDPY, setAbsentDPY] = useState(15);
  
    const [tax, setTax] = useState(900);
    const [insurance, setInsurance] = useState(600);
    const [benifits, setBenifits] = useState(200);
    const [overtime, setOverTime] = useState(700);
    const [supplies, setSupplies] = useState(890);
    const [totalRevenu, setTotalRevenu] = useState(80000);
  
    const content = React.useRef(null);
    const cards = React.useRef(null);
    const laborCost = React.useRef(null);
  
    let otherAnnualCots =
      Number(tax) +
      Number(insurance) +
      Number(benifits) +
      Number(overtime) +
      Number(supplies);
  
    const weeksInYear = 4 * 12;
  
    const grpy = grpw * weeksInYear;
    const grossPay = payRate * grpy;
    const hrsNotWorkY = absenDPY * (grpw / 7);
    const hrsWorked = grpy - hrsNotWorkY;
  
    const annualPayroll = Number(grossPay) + Number(otherAnnualCots);
    const laborPercentage = payRate / (Number(grossPay) / 100);
    const laborHrly = laborPercentage * (annualPayroll / 100);
  
    const laborPercentageInRevenu = annualPayroll / (totalRevenu / 100);

  return (
    <>
        <div className="w-full lg:w-[475px] 2xl:w-[700px] flex justify-center">
              <div className="w-[100%] mx-auto block">
                <div
                  className={`cards-container mx-auto top-[77px] sticky lg:h-[calc(190vh)] min-h-96 p-6 m-4`}
                  ref={cards}
                >
                  <div className=" w-[100%] mx-auto flex flex-col justify-center items-center mb-[20px]">
                    
                    <div className="card w-full md:w-[455px] lg:w-96 2xl:w-[600px] mb-4 shadow-2xl bg-base-100 ">
                      <div className="card-body">
                        <h2 className="card-title w-full bg-gray-200 p-2 rounded-lg">
                          Gross pay
                        </h2>
                        <div className="card-actions">
                          <div className="flex w-full justify-between items-center gap-4 border-b p-2">
                            <p>Gross hours per week</p>{" "}
                            <input
                              autoFocus={true}
                              type="number"
                              className=" w-10 text-lg p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={grpw}
                              onChange={(e) => setGrpw(e.target.value)}
                            />
                            hours{" "}
                          </div>

                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p>Gross hours per year</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={grpy}
                              onChange={(e) => setGrpy(e.target.value)}
                            />
                            hours{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Pay Rate</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={payRate}
                              onChange={(e) => setPayRate(e.target.value)}
                            />
                            Rs/hours{" "}
                          </div>
                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p>Gross Pay</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={grossPay}
                              onChange={(e) => setGrossPay(e.target.value)}
                            />
                            Rs{" "}
                          </div>
                        </div>
                      </div>
                    </div>
{/* start */}
                    {/* <div className="card w-full  md:w-[455px] lg:w-96 2xl:w-[600px] mb-4 shadow-2xl bg-base-100 ">
                      <div className="card-body">
                        <h2 className="card-title w-full bg-gray-200 p-2 rounded-lg">
                          Net hours worked
                        </h2>
                        <div className="card-actions">
                          <div className="flex w-full justify-between items-center gap-4 border-b p-2">
                            <p>Absent days per year</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={absenDPY}
                              onChange={(e) => setAbsentDPY(e.target.value)}
                            />
                            days{" "}
                          </div>

                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p> Hours not worked per year</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={hrsNotWorkY.toFixed(2)}
                              readOnly
                            />
                            hours{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Net hours worked</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={hrsWorked.toFixed(2)}
                              onChange={(e) => setPayRate(e.target.value)}
                            />
                            hours{" "}
                          </div>
                        </div>
                      </div>
                    </div> */}
{/* end */}
                    <div className="card w-full  md:w-[455px] lg:w-96 2xl:w-[600px] mb-4 shadow-2xl bg-base-100 ">
                      <div className="card-body">
                        <h2 className="card-title w-full bg-gray-200 p-2 rounded-lg">
                          Additional annual costs
                        </h2>
                        <div className="card-actions">
                          <div className="flex w-full justify-between items-center gap-4 border-b p-2">
                            <p>Taxes</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={tax}
                              onChange={(e) => setTax(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p> Insurance</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={insurance}
                              onChange={(e) => setInsurance(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Benifits</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={benifits}
                              onChange={(e) => setBenifits(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Overtime</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={overtime}
                              onChange={(e) => setOverTime(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Supplies</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={supplies}
                              onChange={(e) => setSupplies(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between items-center w-full gap-4 border-b p-2">
                            <p>Other annual costs</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={otherAnnualCots}
                              readOnly
                            />
                            Rs{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card w-full  md:w-[455px] lg:w-96 2xl:w-[600px] mb-4 shadow-2xl bg-base-100 ">
                      <div className="card-body">
                        <h2 className="card-title w-full bg-gray-200 p-2 rounded-lg">
                          Main Results
                        </h2>
                        <div className="card-actions">
                          <div className="flex w-full justify-between items-center gap-4 border-b p-2">
                            <p>Annual payroll labor cost</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={annualPayroll}
                              readOnly
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p> Hourly labor cost</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={laborHrly.toFixed(2)}
                              readOnly
                            />
                            Rs{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card w-full  md:w-[455px] lg:w-96 2xl:w-[600px] mb-4 shadow-2xl bg-base-100 ">
                      <div className="card-body">
                        <h2 className="card-title w-full bg-gray-200 p-2 rounded-lg">
                          Labor cost percentage
                        </h2>
                        <div className="card-actions">
                          <div className="flex w-full justify-between items-center gap-4 border-b p-2">
                            <p>Total revenue</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={totalRevenu}
                              onChange={(e) => setTotalRevenu(e.target.value)}
                            />
                            Rs{" "}
                          </div>

                          <div className="flex justify-between w-full items-center gap-4 border-b p-2">
                            <p> Hourrly labor cost</p>{" "}
                            <input
                              type="number"
                              className=" w-10 p-0 m-0 outline-none focus:outline-none"
                              name=""
                              id=""
                              value={laborPercentageInRevenu.toFixed(2)}
                              readOnly
                            />
                            Rs{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card w-80 lg:w-96 mb-4 shadow-2xl bg-base-100 ">
                      <div className="w-full p-5 text-lg rounded-md hover:scale-[1.1] transition-all duration-75 shadow-xl bg-blue-950 text-white">
                        <p>Checkout 55 similar business planning calculator</p>
                      </div>

                      <div className="flex mt-3 gap-3 sticky top-8">
                        <div className="flex items-center justify-center shadow-lg w-[180px] lg:w-52 h-20 text-primary hover:scale-[1.1] transition-all duration-75 rounded-md  p-3 bg-gray-200">
                          <p>3D printer - buy vs aoutsouce</p>
                        </div>

                        <div className="flex items-center justify-center shadow-lg w-[180px] lg:w-52 h-20 text-primary hover:scale-[1.1] transition-all duration-75  rounded-md p-3 bg-gray-200">
                          <p>Absence percentage</p>
                        </div>
                      </div>

                      <div className="flex mt-3 gap-3 ">
                        <div className="flex items-center justify-center shadow-lg w-[180px] lg:w-52 text-primary h-20 hover:scale-[1.1] transition-all duration-75 rounded-md  p-3 bg-gray-200">
                          <p>Accumulated deprecian</p>
                        </div>
                        <div className="flex items-center justify-center shadow-lg w-[180px] lg:w-52 h-20  text-white rounded-md hover:scale-[1.1] transition-all duration-75 p-3 bg-blue-950">
                          <p>...52 more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default page
