import AppSidebar from "@/components/AppSidebar";
import "../globals.css";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your App",
  description: "App description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider className="w-full">
          <AppSidebar />
            <main className="w-full">
              <div className="flex-1 px-4 md:px-6 py-3">
                <SidebarTrigger />
              </div>
              <div className="w-full p-4 md:p-6">{children}</div>
   
            </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
