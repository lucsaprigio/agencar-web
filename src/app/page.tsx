import { ButtonScroll } from "@/components/ui/button-scroll";
import { UserCircle2Icon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex flex-row items-center justify-between w-full h-24 bg-zinc-900 text-gray-50 px-20">
        <div>
          <span>Logo</span>
        </div>
        <div className="flex flex-row space-x-5">
          <ButtonScroll targedDiv="header">
            <span>Sobre</span>
          </ButtonScroll>
          <ButtonScroll targedDiv="contact">
            <span>Contato</span>
          </ButtonScroll>
          <Link className="flex gap-3 items-center hover:scale-105 transition-all duration-150" href="/signin">
            <UserCircle2Icon size={34} />
            <span>Entrar</span>
          </Link>
        </div>
      </nav>
      <section id="header" className="relative flex flex-col h-screen space-y-7 items-center justify-start md:p-20 bg-[url('/background.jpg')] bg-cover bg-no-repeat after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-slate-800 after:opacity-90">
        <div className="flex flex-col items-center justify-start z-50 space-y-10 px-14">
          <h2 className="text-4xl font-bold text-gray-50">Lorem Ipsum</h2>
          <span className="text-gray-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar gravida aliquet. Curabitur ut nunc commodo,
            aliquet orci ac, feugiat est. Donec feugiat dui nec sem elementum volutpat. Nullam finibus condimentum velit, id mattis nisl porttitor eget.
            Cras mollis risus quis metus semper venenatis. Nunc efficitur, ipsum sed convallis ornare, sem magna egestas nisi, non pretium sem mauris ut purus.
            Suspendisse at urna nec mauris facilisis dignissim ut vel augue. Vivamus ac augue id elit eleifend vehicula. In sed erat sem. In ornare tristique ex ac rutrum.
            Vestibulum vehicula ex ac luctus sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque scelerisque tincidunt justo et
            pretium. Suspendisse tempus dui sed magna condimentum efficitur. Donec massa dolor, fermentum ac cursus ac, condimentum sed leo. Pellentesque tempor, dui quis laoreet viverra,
            risus ante mollis erat, in facilisis neque velit a massa.
          </span>
        </div>
      </section>
    </div>
  );
}
