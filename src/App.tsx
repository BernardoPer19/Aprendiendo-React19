import { Suspense } from "react";
import { getPlanets } from "./actions/get-planets.actions";
import Planets from "./pages/Planets";
import { ErrorBoundary } from "./shared/ErrorBoundary";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Planetas del Sistema Solar</h1>

      <ErrorBoundary fallback={<h1>Error al cargar los planetas</h1>}>
        <Suspense fallback={<h1>Cargando planetas...</h1>}>
          <Planets getPlanets={getPlanets()} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
