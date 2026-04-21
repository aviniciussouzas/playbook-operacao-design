import { Network, Users, TrendingUp } from "lucide-react";

const allocationData = {
  typeA: [
    { account: "Icatu", designer: "Huggo", color: "purple" },
    {
      account: "CNP",
      designer: "Guilherme Borghi",
      color: "purple",
    },
    { account: "Huawei", designer: "Edson", color: "purple" },
    {
      account: "Pague Veloz",
      designer: "Bruna Dias",
      color: "purple",
    },
    {
      account: "Projetos IA",
      designer: "Victor",
      color: "purple",
    },
    {
      account: "Projetos Extra",
      designer: "Victor",
      color: "purple",
    },
    { account: "Playbooks", designer: null, color: "purple" },
  ],
  typeB: [
    {
      account: "Fisk",
      designer: "Beatris Lima",
      color: "blue",
    },
    {
      account: "Infracommerce",
      designer: "João Victor",
      color: "blue",
    },
    { account: "GS1", designer: "Tuane", color: "blue" },
    {
      account: "Hidroall",
      designer: "Beatris Miura",
      color: "blue",
    },
    {
      account: "Etex",
      designer: "João Zefferino",
      color: "blue",
    },
  ],
  typeC: [
    { account: "Pilot", designer: "Isabel", color: "green" },
    { account: "Dreame", designer: "Isabel", color: "green" },
    {
      account: "Holasim",
      designer: "Beatriz Miura",
      color: "green",
    },
    {
      account: "Lubrizol",
      designer: "João Victor",
      color: "green",
    },
    {
      account: "Amos",
      designer: "Beatris Lima",
      color: "green",
    },
    { account: "History", designer: "Areta", color: "green" },
    { account: "YBY", designer: "Victor", color: "green" },
  ],
};

const designers = [
  {
    name: "Edson",
    accounts: ["Huawei"],
    count: 1,
    types: ["A"],
  },
  {
    name: "Guilherme Borghi",
    accounts: ["CNP"],
    count: 1,
    types: ["A"],
  },
  {
    name: "Bruna Dias",
    accounts: ["Pague Veloz"],
    count: 1,
    types: ["A"],
  },
  {
    name: "Huggo",
    accounts: ["Icatu"],
    count: 1,
    types: ["A"],
  },
  {
    name: "Beatris Lima",
    accounts: ["Amos", "Fisk"],
    count: 2,
    types: ["B", "C"],
  },
  {
    name: "Isabel",
    accounts: ["Pilot", "Dreame"],
    count: 2,
    types: ["C", "C"],
  },
  {
    name: "Areta",
    accounts: ["History"],
    count: 1,
    types: ["C"],
  },
  {
    name: "Victor",
    accounts: ["YBY", "Projetos Extra"],
    count: 2,
    types: ["A", "C"],
  },
  {
    name: "João Victor",
    accounts: ["Lubrizol", "Infracommerce"],
    count: 2,
    types: ["B", "C"],
  },
  {
    name: "João Zefferino",
    accounts: ["Etex"],
    count: 1,
    types: ["B"],
  },
  { name: "Tuane", accounts: ["GS1"], count: 1, types: ["B"] },
  {
    name: "Paulo Dias",
    accounts: ["Pausas"],
    count: 1,
    types: [],
  },
  {
    name: "Beatriz Miura",
    accounts: ["Holasim", "Hidroall"],
    count: 2,
    types: ["B", "C"],
  },
];

export function AllocationMap() {
  const allAccounts = [
    ...allocationData.typeA,
    ...allocationData.typeB,
    ...allocationData.typeC,
  ];
  const allocatedAccounts = allAccounts.filter(
    (a) => a.designer,
  );
  const unallocatedAccounts = allAccounts.filter(
    (a) => !a.designer,
  );

  const sharedDesigners = designers.filter((d) => d.count > 1);
  const dedicatedDesigners = designers.filter(
    (d) => d.count === 1 && d.types.includes("A"),
  );

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-3 text-slate-900">
          Mapa de Alocação Criativa
        </h2>
        <p className="text-lg text-slate-600">
          Leitura sistêmica da distribuição de contas,
          responsabilidades e capacidade do time
        </p>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-4">
          Visão Geral da Operação
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">
              17
            </div>
            <div className="text-sm text-slate-600">
              Contas Ativas
            </div>
          </div>
          <div className="bg-white rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">
              13
            </div>
            <div className="text-sm text-slate-600">
              Designers Ativos
            </div>
          </div>
          <div className="bg-white rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-1">
              {allocatedAccounts.length}
            </div>
            <div className="text-sm text-slate-600">
              Contas Alocadas
            </div>
          </div>
          <div className="bg-white rounded-lg p-5 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-1">
              {unallocatedAccounts.length}
            </div>
            <div className="text-sm text-slate-600">
              Contas a Alocar
            </div>
          </div>
        </div>
      </div>

      {/* Mapa de Rede */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-6">
          <Network className="w-6 h-6 text-slate-700" />
          <h3 className="font-semibold text-slate-900 text-xl">
            Mapa de Conexões
          </h3>
        </div>

        {/* Tipo A */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">
                Contas Tipo A — Sistema / Alta Complexidade
              </h4>
              <p className="text-sm text-slate-600">
                {allocationData.typeA.length} contas · Dedicação
                exclusiva recomendada
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-700">
                {
                  allocationData.typeA.filter((a) => a.designer)
                    .length
                }
                /{allocationData.typeA.length}
              </div>
              <div className="text-xs text-slate-600">
                alocadas
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allocationData.typeA.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg p-4 border-2 ${item.designer ? "border-purple-400" : "border-purple-200 border-dashed"}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="font-semibold text-slate-900">
                    {item.account}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-1.5"></div>
                </div>
                {item.designer ? (
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-medium">
                      {item.designer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-slate-700">
                      {item.designer}
                    </span>
                  </div>
                ) : (
                  <div className="text-sm text-slate-500 italic">
                    Não alocada
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tipo B */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">
                Contas Tipo B — Produção Estratégica
              </h4>
              <p className="text-sm text-slate-600">
                {allocationData.typeB.length} contas · Dedicação
                compartilhada (2-3 contas)
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-700">
                {
                  allocationData.typeB.filter((a) => a.designer)
                    .length
                }
                /{allocationData.typeB.length}
              </div>
              <div className="text-xs text-slate-600">
                alocadas
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allocationData.typeB.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg p-4 border-2 ${item.designer ? "border-blue-400" : "border-blue-200 border-dashed"}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="font-semibold text-slate-900">
                    {item.account}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5"></div>
                </div>
                {item.designer ? (
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-medium">
                      {item.designer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-slate-700">
                      {item.designer}
                    </span>
                  </div>
                ) : (
                  <div className="text-sm text-slate-500 italic">
                    Não alocada
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tipo C */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">
                Contas Tipo C — Tático / Baixo Escopo
              </h4>
              <p className="text-sm text-slate-600">
                {allocationData.typeC.length} contas · Dedicação
                compartilhada (até 5 contas)
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-700">
                {
                  allocationData.typeC.filter((a) => a.designer)
                    .length
                }
                /{allocationData.typeC.length}
              </div>
              <div className="text-xs text-slate-600">
                alocadas
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allocationData.typeC.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg p-4 border-2 ${item.designer ? "border-green-400" : "border-green-200 border-dashed"}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="font-semibold text-slate-900">
                    {item.account}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-1.5"></div>
                </div>
                {item.designer ? (
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-medium">
                      {item.designer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-slate-700">
                      {item.designer}
                    </span>
                  </div>
                ) : (
                  <div className="text-sm text-slate-500 italic">
                    Não alocada
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visão por Designer */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-slate-700" />
          <h3 className="font-semibold text-slate-900 text-xl">
            Visão por Designer
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
              Designers com Dedicação Exclusiva
            </h4>
            <p className="text-sm text-slate-600 mb-4">
              Alocados 100% em contas Tipo A
            </p>
            <div className="space-y-3">
              {dedicatedDesigners.map((designer, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {designer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">
                      {designer.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {designer.accounts.join(", ")}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-purple-700">
                    Tipo A
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
              Designers com Dedicação Compartilhada
            </h4>
            <p className="text-sm text-slate-600 mb-4">
              Alocados em 2+ contas (Tipos B e C)
            </p>
            <div className="space-y-3">
              {sharedDesigners.map((designer, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {designer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">
                      {designer.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {designer.accounts.join(", ")}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-slate-900">
                      {designer.count} contas
                    </div>
                    <div className="text-xs text-slate-500">
                      {designer.types.join(", ")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-slate-800 text-white rounded-xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <TrendingUp className="w-6 h-6 text-white flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-2">
              Leitura Sistêmica
            </h3>
            <p className="text-sm text-slate-300">
              Insights sobre distribuição de capacidade e
              oportunidades de balanceamento
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">
              Padrões identificados
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">
                  →
                </span>
                <span>
                  <strong className="text-white">
                    {dedicatedDesigners.length} designers
                  </strong>{" "}
                  em dedicação exclusiva a contas Tipo A
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">
                  →
                </span>
                <span>
                  <strong className="text-white">
                    {sharedDesigners.length} designers
                  </strong>{" "}
                  compartilhados entre múltiplas contas
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">
                  →
                </span>
                <span>
                  <strong className="text-white">
                    {unallocatedAccounts.length} contas
                  </strong>{" "}
                  aguardando alocação de responsável
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">
                  →
                </span>
                <span>
                  Distribuição equilibrada entre tipos A, B e C
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">
              Oportunidades de otimização
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>
                  Alocar contas sem responsável definido
                  (Projetos IA, Playbooks, Hidroall, Holasim)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>
                  Revisar carga de designers com 2+ contas para
                  evitar sobrecarga
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>
                  Paulo Dias em "Pausas" — avaliar
                  redistribuição ou nova alocação
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>
                  Considerar pares para contas Tipo A sem
                  cobertura secundária
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-4">
          Como usar este mapa
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-medium text-slate-900 mb-2">
              Para liderança
            </h4>
            <p className="text-sm text-slate-700">
              Identificar gargalos, planejar contratações,
              balancear carga entre designers, prever capacidade
              futura
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-900 mb-2">
              Para designers
            </h4>
            <p className="text-sm text-slate-700">
              Entender contexto da própria alocação, visualizar
              pares para troca de experiência, identificar
              oportunidades de mobilidade
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-900 mb-2">
              Para planejamento
            </h4>
            <p className="text-sm text-slate-700">
              Antecipar necessidades, planejar férias e
              ausências, organizar cobertura, redistribuir
              quando necessário
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}