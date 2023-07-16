// import React, { useState } from "react";
// import "./Mainn.css";

// const Mainn = () => {
//   const [length, setLength] = useState(1);
//   const [options, setOptions] = useState({
//     option1: false,
//     option2: false,
//     option3: false,
//     option4: false,
//   });

//   const handleSliderChange = (event) => {
//     setLength(Number(event.target.value));
//   };

//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setOptions((prevOptions) => ({
//       ...prevOptions,
//       [name]: checked,
//     }));
//   };

//   const handleGenerateClick = () => {
//     // Generate the desired output based on the selected options and length
//     // You can modify this function according to your specific requirements
//     console.log("Generating with length:", length);
//     console.log("Options:", options);
//   };

//   return (
//     <div className="cont">
//       <div className="main-container">
//         <div className="password-heading">PS3&SVBIA</div>

//         <div className="slider-container">
//           <label>
//             Character Length:
//             <span style={{ marginLeft: "4rem" }}>{length}</span>
//             <input
//               className="slider-input"
//               type="range"
//               min="0"
//               max="10"
//               value={length}
//               onChange={handleSliderChange}
//               style={{
//                 "--value": length,
//               }}
//             />
//           </label>
//         </div>
//         <br />

//         <div className="checkbox">
//           <label>
//             <input
//               type="checkbox"
//               name="option1"
//               checked={options.option1}
//               onChange={handleCheckboxChange}
//               className="checkbox-input"
//             />{" "}
//             <span className="checkbox-label">Include uppercase Letters</span>
//           </label>
//           <br />
//           <label>
//             <input
//               type="checkbox"
//               name="option2"
//               checked={options.option2}
//               onChange={handleCheckboxChange}
//               className="checkbox-input"
//             />
//             <span className="checkbox-label">Include lowercase Letters</span>
//           </label>
//           <br />
//           <label>
//             <input
//               type="checkbox"
//               name="option3"
//               checked={options.option3}
//               onChange={handleCheckboxChange}
//               className="checkbox-input"
//             />
//             <span className="checkbox-label">Include Numbers</span>
//           </label>
//           <br />
//           <label>
//             <input
//               type="checkbox"
//               name="option4"
//               checked={options.option4}
//               onChange={handleCheckboxChange}
//               className="checkbox-input"
//             />
//             <span className="checkbox-label">Include Symbols</span>
//           </label>
//         </div>
//         <br />

//         <div className="strength">STRENGTH</div>
//         <br />

//         <button className="btn" onClick={handleGenerateClick}>
//           Generate
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Mainn;
