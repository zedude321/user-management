import { 
    BarChart, 
    Command, 
    Document, 
    Hand, 
    Message,
    Picture, 
    Question, 
    Settings 
} from "@/icons";
import { usePathname } from 'next/navigation';
import Tab from "./tab";

export default function Sidebar() {
    const pathname = usePathname();

    return (
      <div className="w-bar h-screen p-8">
        {/* Logos */}
        <h1 className="font-bold text-xl mt-1 mb-14">YOURLOGO</h1>
        {/* Tabs 1 */}
        <div className="flex flex-col gap-4 mb-16">
            <Tab text='Dashboard' path='/'><Command /></Tab>
            <Tab text='Users' path='/users'><BarChart /></Tab>
            <Tab text='Documents' path='/documents'><Document /></Tab>
            <Tab text='Photos' path='/photos'><Picture /></Tab>
            <Tab text='Hierarchy' path='/hierarchy'><Hand /></Tab>
        </div>
        {/* Tabs 2 */}
        <div className="flex flex-col gap-4">
            <Tab text='Message' path='/message'><Message /></Tab>
            <Tab text='Help' path='/help'><Question /></Tab>
            <Tab text='Setting' path='/setting'><Settings /></Tab>
        </div>
      </div>
    );
  }
  