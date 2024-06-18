import Sidebar from "@/components/Sidebar";
export default function RootLayout({
  children,
}:Readonly<{
  childen:React.ReactNode;
}>){
  const loggedIn={firstName:'Aditi',lastName:'Mondal' }

}
return (
  <main className="flex" h- screen w-full font-inter">
  <Sidebar user={loggedIN}/>
  </main>
);}
