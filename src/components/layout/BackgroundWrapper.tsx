// "use client"

// import React from "react";

// export function BackgroundWrapper({
//   children,
//   image,      // optional faint background image
// }: {
//   children: React.ReactNode
//   image?: string
// }) {
//   return (
//     <div className="relative">
//       {/* Faint background image */}
//       {image && (
//         <div
//           className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10 pointer-events-none"
//           style={{ backgroundImage: `url(${image})` }}
//         />
//       )}

//       {/* Section content: fully visible */}
//       <div className="relative z-10">
//         {children}
//       </div>
//     </div>
//   )
// }
