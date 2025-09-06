// // Client wrapper: BackgroundClient.tsx
// "use client";

// import { ReactNode } from "react";
// import { usePathname } from "next/navigation";
// import { BackgroundWrapper } from "./BackgroundWrapper";
// import { pageBackgrounds } from "@/config/pageBackgrounds";

// interface Props {
//   children: ReactNode;
// }

// export function BackgroundClient({ children }: Props) {
//   const pathname = usePathname();
//   const image = pageBackgrounds[pathname];

//   return <BackgroundWrapper image={image}>{children}</BackgroundWrapper>;
// }
