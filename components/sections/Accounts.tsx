import { Crown, TrendingUp, Zap } from 'lucide-react';

export function Accounts() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-3 text-slate-900">Tipologia de Contas</h2>
        <p className="text-lg text-slate-600">
          Nem toda conta funciona igual. Classificar corretamente define alocação, processo e nível de decisão.
        </p>
      </div>

      <div className="space-y-6">
        {/* Tipo A */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-semibold text-slate-900">Tipo A</h3>
                <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                  Contas de Sistema
                </span>
              </div>
              <p className="text-slate-700">Alta complexidade criativa e impacto estratégico</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Características</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Requer construção de sistema visual completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Múltiplas entregas simultâneas e integradas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Alto valor estratégico para o cliente e agência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">•</span>
                  <span>Exige direção criativa consistente</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Perfil de Atuação</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Nível de decisão</span>
                  <span className="font-medium text-purple-600">Direção Criativa</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Risco de retrabalho</span>
                  <span className="font-medium text-purple-600">Alto</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Impacto no portfólio</span>
                  <span className="font-medium text-purple-600">Muito Alto</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Complexidade</span>
                  <span className="font-medium text-purple-600">Sistêmica</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-purple-200">
            <h4 className="text-sm font-semibold text-slate-900 mb-2">Exemplos</h4>
            <p className="text-sm text-slate-700">
              Lançamento de marca, rebranding completo, campanha integrada multi-canal, desenvolvimento de linguagem visual para produto novo
            </p>
          </div>
        </div>

        {/* Tipo B */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-semibold text-slate-900">Tipo B</h3>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  Produção Estratégica
                </span>
              </div>
              <p className="text-slate-700">Demanda recorrente com padrão estabelecido</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Características</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Sistema visual já estabelecido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Produção recorrente e previsível</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Requer consistência e velocidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Baixa necessidade de exploração criativa</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Perfil de Atuação</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Nível de decisão</span>
                  <span className="font-medium text-blue-600">Produção Guiada</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Risco de retrabalho</span>
                  <span className="font-medium text-blue-600">Médio</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Impacto no portfólio</span>
                  <span className="font-medium text-blue-600">Médio</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Complexidade</span>
                  <span className="font-medium text-blue-600">Aplicação</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-200">
            <h4 className="text-sm font-semibold text-slate-900 mb-2">Exemplos</h4>
            <p className="text-sm text-slate-700">
              Posts mensais para redes sociais, adaptações de campanha para novos canais, materiais de ponto de venda, newsletters periódicas
            </p>
          </div>
        </div>

        {/* Tipo C */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-semibold text-slate-900">Tipo C</h3>
                <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                  Contas Táticas
                </span>
              </div>
              <p className="text-slate-700">Baixo escopo, demandas pontuais e rápidas</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Características</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span>Entregas pontuais e esporádicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span>Escopo simples e bem definido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span>Prazo curto, execução rápida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span>Baixa necessidade de alinhamento contínuo</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Perfil de Atuação</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Nível de decisão</span>
                  <span className="font-medium text-green-600">Execução Direta</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Risco de retrabalho</span>
                  <span className="font-medium text-green-600">Baixo</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Impacto no portfólio</span>
                  <span className="font-medium text-green-600">Baixo</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-700">Complexidade</span>
                  <span className="font-medium text-green-600">Tática</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-green-200">
            <h4 className="text-sm font-semibold text-slate-900 mb-2">Exemplos</h4>
            <p className="text-sm text-slate-700">
              Banner para evento pontual, ajuste em template existente, criação de apresentação simples, peça única sem desdobramentos
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-4">Matriz Comparativa</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="text-left py-3 px-4 font-semibold text-slate-900">Critério</th>
                <th className="text-left py-3 px-4 font-semibold text-purple-900">Tipo A</th>
                <th className="text-left py-3 px-4 font-semibold text-blue-900">Tipo B</th>
                <th className="text-left py-3 px-4 font-semibold text-green-900">Tipo C</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-3 px-4 text-slate-700">Objetivo criativo</td>
                <td className="py-3 px-4 text-slate-700">Construir sistema</td>
                <td className="py-3 px-4 text-slate-700">Aplicar sistema</td>
                <td className="py-3 px-4 text-slate-700">Executar pontual</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-700">Frequência</td>
                <td className="py-3 px-4 text-slate-700">Projetos grandes</td>
                <td className="py-3 px-4 text-slate-700">Recorrente</td>
                <td className="py-3 px-4 text-slate-700">Esporádica</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-700">Autonomia do designer</td>
                <td className="py-3 px-4 text-slate-700">Baixa (alta direção)</td>
                <td className="py-3 px-4 text-slate-700">Média</td>
                <td className="py-3 px-4 text-slate-700">Alta</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-700">Iterações esperadas</td>
                <td className="py-3 px-4 text-slate-700">Muitas</td>
                <td className="py-3 px-4 text-slate-700">Poucas</td>
                <td className="py-3 px-4 text-slate-700">Mínimas</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-700">Impacto estratégico</td>
                <td className="py-3 px-4 text-slate-700">Muito alto</td>
                <td className="py-3 px-4 text-slate-700">Médio</td>
                <td className="py-3 px-4 text-slate-700">Baixo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
