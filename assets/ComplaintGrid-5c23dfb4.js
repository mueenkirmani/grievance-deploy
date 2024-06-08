import{j as e}from"./index-ed031c35.js";function r({item:s}){return e.jsxs("div",{className:`w-full rounded-lg border bg-white px-8 py-6 shadow-md
              ${s.status==="open"?"border-red-500":""}
              ${s.status==="in-progress"?"border-yellow-500":""}
              ${s.status==="done"?"border-green-500":""}
              `,children:[e.jsx("h2",{className:"mb-4 text-2xl font-bold",children:"Job Details"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("span",{className:"font-bold text-gray-500",children:"Job ID:"})," ",e.jsx("span",{className:"text-gray-700",children:s._id})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("span",{className:"font-bold text-gray-500",children:"Category:"})," ",e.jsxs("span",{className:"text-gray-700",children:[s.category==="electrician"&&"Electrician⚡",s.category==="plumbing"&&"Plumbing🚰",s.category==="carpenter"&&"Carpenter🔨",s.category==="others"&&"Others🔧"]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("span",{className:"font-bold text-gray-500",children:"Status:"})," ",e.jsxs("span",{className:`
                  ${s.status==="open"?"text-red-500":""}
                  ${s.status==="in-progress"?"text-yellow-500":""}
                  ${s.status==="done"?"text-green-500":""}
                `,children:[s.status==="open"&&"Open",s.status==="in-progress"&&"In Progress",s.status==="done"&&"Done"]})]})]})}export{r as C};
