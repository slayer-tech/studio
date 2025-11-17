import Link from "next/link";
import { Icons } from "@/components/icons";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
            <Link href="/" className="flex items-center gap-2">
                <Icons.logo className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">CodeVerse</span>
            </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
