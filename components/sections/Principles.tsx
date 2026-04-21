import { Target, Layers, Ruler, Clock } from 'lucide-react';

export function Principles() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-3 text-slate-900">Princípios Criativos</h2>
        <p className="text-lg text-slate-600">
          4 princípios que orientam todas as decisões criativas. Memorizáveis, aplicáveis, não negociáveis.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Princípio 1 */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">1. Consistência sobre Novidade</h3>
              <p className="text-sm text-slate-600">Design constrói sistemas, não peças isoladas</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-slate-700">
              Cada entrega deve reforçar o sistema visual da conta, não reinventá-lo. Criatividade acontece dentro da estrutura, não apesar dela.
            </p>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Na prática, significa:</h4>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-0.5">→</span>
                  <span>Usar a paleta, tipografia e grid estabelecidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-0.5">→</span>
                  <span>Evoluir o sistema, não criar paralelo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-0.5">→</span>
                  <span>Se precisa quebrar padrão, justificar estrategicamente</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-100 border border-indigo-200 rounded-lg p-4">
              <p className="text-sm text-slate-800">
                <strong>Exemplo:</strong> Se a conta tem um sistema visual minimalista, não crie uma peça maximalista "porque é criativo". Crie variação dentro do minimalismo.
              </p>
            </div>
          </div>
        </div>

        {/* Princípio 2 */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">2. Contexto antes de Execução</h3>
              <p className="text-sm text-slate-600">Entender o "porquê" define o "como"</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-slate-700">
              Nenhuma decisão criativa deve ser tomada sem entender o contexto. Briefing não é burocracia — é ferramenta de pensamento estratégico.
            </p>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Na prática, significa:</h4>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">→</span>
                  <span>Sempre perguntar "qual o objetivo desta peça?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">→</span>
                  <span>Entender o público e onde o material será usado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">→</span>
                  <span>Não começar a criar sem briefing completo</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-slate-800">
                <strong>Exemplo:</strong> Um post para Instagram tem propósito diferente de um banner de site. Mesmo conteúdo, execução diferente baseada no contexto de uso.
              </p>
            </div>
          </div>
        </div>

        {/* Princípio 3 */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Ruler className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">3. Escopo Claro, Criatividade Focada</h3>
              <p className="text-sm text-slate-600">Limites não matam criatividade, direcionam</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-slate-700">
              Criatividade sem escopo é exploração infinita. Criatividade com escopo claro é solução elegante. Respeite o briefing.
            </p>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Na prática, significa:</h4>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Entregar o que foi pedido, não o que você acha melhor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Se tiver sugestão fora do escopo, apresente separadamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Não adicionar complexidade desnecessária</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-4">
              <p className="text-sm text-slate-800">
                <strong>Exemplo:</strong> Se o briefing pede "3 posts simples", não entregue "3 posts + stories + reels" achando que está agregando valor. Entregue o que foi pedido com excelência.
              </p>
            </div>
          </div>
        </div>

        {/* Princípio 4 */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">4. Timing é Parte da Qualidade</h3>
              <p className="text-sm text-slate-600">Entrega no prazo é entrega de qualidade</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-slate-700">
              Design perfeito que chega atrasado não é perfeito. Qualidade inclui previsibilidade e respeito ao prazo acordado.
            </p>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Na prática, significa:</h4>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">→</span>
                  <span>Priorizar entrega no prazo sobre perfeccionismo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">→</span>
                  <span>Comunicar antecipadamente se houver risco de atraso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">→</span>
                  <span>Iterar depois, não bloquear o cliente</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-100 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-slate-800">
                <strong>Exemplo:</strong> Se está em dúvida entre "iterar mais uma vez" ou "entregar no prazo com 90% de certeza", escolha entregar. Você sempre pode evoluir na próxima rodada.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white rounded-xl p-8">
        <h3 className="font-semibold mb-4">Estes princípios funcionam juntos</h3>
        <p className="text-slate-300 mb-6">
          Não são regras isoladas. São um sistema de pensamento que guia decisão criativa em qualquer situação.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="text-lg font-semibold mb-1">Consistência</div>
            <div className="text-xs text-slate-400">Mantém a identidade</div>
          </div>
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="text-lg font-semibold mb-1">Contexto</div>
            <div className="text-xs text-slate-400">Direciona a solução</div>
          </div>
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="text-lg font-semibold mb-1">Escopo</div>
            <div className="text-xs text-slate-400">Foca a criatividade</div>
          </div>
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="text-lg font-semibold mb-1">Timing</div>
            <div className="text-xs text-slate-400">Completa a qualidade</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-4">Como usar estes princípios no dia a dia</h3>
        <div className="space-y-3 text-sm text-slate-700">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
            <p>Antes de começar qualquer job, pergunte: "Este trabalho respeita os 4 princípios?"</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
            <p>Se estiver em dúvida sobre uma decisão criativa, volte aos princípios para orientar</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
            <p>Use os princípios para dar e receber feedback estruturado no time</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
            <p>Compartilhe os princípios com clientes para alinhar expectativas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
