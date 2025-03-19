import Link from 'next/link';


export default function SideNav() {
  return (
    <nav className="w-64 h-screen bg-gray-800 text-white p-4">
      <ul>
        <li className="mb-2">
          <Link href="/dashboard">
            <span className="block p-2 hover:bg-gray-700 rounded">Dashboard</span>
          </Link>
        </li>
        <li className="mb-2">
          
          <Link href="/settings">
            <span className="block p-2 hover:bg-gray-700 rounded">Settings</span>
          </Link>
          </li>
          <li className="mb-2">
          <Link href="/invoices">
            <span className="block p-2 hover:bg-gray-700 rounded">Invoices</span>
          </Link>
          </li>
        
      
          <li className="mb-2">
          <Link href="/Customers">
            <span className="block p-2 hover:bg-gray-700 rounded">Customers</span>
          </Link>
          </li>
      </ul>
    </nav>
  );






}