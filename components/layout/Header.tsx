import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="text-xl font-semibold text-gray-900 dark:text-gray-100"
        >
          Naheed Virk
        </Link>

        <ul className="flex gap-6">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-900 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
