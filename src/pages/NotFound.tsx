import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen text-textPrimary bg-primary">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Oops! Página não encontrada.</p>
      <p className="mt-2 text-center max-w-md opacity-30">
        A página que você está procurando não existe ou foi movida. Verifique a
        URL ou volte para a página inicial.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-secundary rounded-xl hover:bg-blue-700 transition cursor-pointer"
      >
        Retornar ao início
      </Link>
    </div>
  );
}
