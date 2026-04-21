import { CheckCircle, Users, AlertTriangle } from 'lucide-react';

export function Guardrails() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-3 text-slate-900">Guardrails de Decisão</h2>
        <p className="text-lg text-slate-600">
          O que você pode decidir sozinho, o que precisa alinhar, quando escalar. Autonomia com estrutura.
        </p>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-4">Por que Guardrails importam</h3>
        <p className="text-slate-700 mb-6">
          Autonomia sem direção gera retrabalho. Controle excessivo mata criatividade e velocidade. Guardrails definem onde você tem liberdade total e onde precisa consultar.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-emerald-600 mb-1">Zona Verde</div>
            <p className="text-sm text-slate-700">Você decide sozinho</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-amber-600 mb-1">Zona Amarela</div>
            <p className="text-sm text-slate-700">Alinhamento necessário</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">Zona Vermelha</div>
            <p className="text-sm text-slate-700">Escalada obrigatória</p>
          </div>
        </div>
      </div>

      {/* Zona Verde */}
      <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Zona Verde: Você Decide Sozinho</h3>
            <p className="text-sm text-slate-700">
              Decisões táticas dentro do escopo, padrão e sistema visual estabelecido. Você tem autonomia total.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Exemplos de decisões autônomas</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Escolher entre variações de layout dentro do grid</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Aplicar cores da paleta estabelecida</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Ajustar hierarquia tipográfica dentro do sistema</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Selecionar imagens que respeitam o tom visual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Criar variações de uma mesma peça para A/B test</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Ajustar copy menor (CTAs, microcopy)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Exportar nos formatos técnicos solicitados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Fazer ajustes técnicos (alinhar pixels, corrigir RGB/CMYK)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Quando você está na Zona Verde</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-700 mb-2">
                  <strong className="text-slate-900">Contas Tipo C:</strong> A maior parte das decisões está aqui
                </p>
                <p className="text-xs text-slate-600">Escopo simples e bem definido = alta autonomia</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-700 mb-2">
                  <strong className="text-slate-900">Contas Tipo B:</strong> Decisões dentro do sistema
                </p>
                <p className="text-xs text-slate-600">Aplicação de padrões já validados</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-slate-700 mb-2">
                  <strong className="text-slate-900">Contas Tipo A:</strong> Decisões de execução técnica
                </p>
                <p className="text-xs text-slate-600">Depois que a direção criativa está aprovada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zona Amarela */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Zona Amarela: Alinhamento Necessário</h3>
            <p className="text-sm text-slate-700">
              Decisões que podem impactar consistência, escopo ou expectativa. Valide com par, lead ou conta antes de executar.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Exemplos de decisões que precisam alinhamento</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">⚠</span>
                <span>Propor variação significativa de estilo visual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">⚠</span>
                <span>Adicionar ou remover elementos do briefing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">⚠</span>
                <span>Mudar headline ou copy principal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">⚠</span>
                <span>Interpretar briefing ambíguo (pedir clareza primeiro)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">⚠</span>
                <span>Sugerir mudança de escopo ou formato</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">⚠</span>
                <span>Propor solução diferente da pedida (mesmo que melhor)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">⚠</span>
                <span>Usar imagem ou recurso fora do padrão usual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">⚠</span>
                <span>Entregar com atraso (mesmo que pequeno)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Com quem alinhar?</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-slate-900 mb-2"> Direção Criativa / DSM </p>
                <p className="text-xs text-slate-600">Para decisões criativas que afetam consistência visual ou direção</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-slate-900 mb-2">Gestor de Conta / DSM </p>
                <p className="text-xs text-slate-600">Para mudanças de escopo, prazo ou interpretação de briefing</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-slate-900 mb-2">Par Designer</p>
                <p className="text-xs text-slate-600">Para segunda opinião rápida sobre decisão criativa</p>
              </div>
            </div>

            <div className="mt-4 bg-amber-100 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-slate-800">
                <strong>Regra:</strong> Na dúvida, alinha. Melhor perder 10 minutos alinhando do que horas refazendo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Zona Vermelha */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Zona Vermelha: Escalada Obrigatória</h3>
            <p className="text-sm text-slate-700">
              Decisões estratégicas que impactam negócio, marca ou operação. Sempre envolvem liderança criativa ou direção.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Exemplos de decisões que devem ser escaladas</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">⛔</span>
                <span>Mudança de identidade visual ou sistema de marca</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">⛔</span>
                <span>Proposta de reposicionamento criativo da conta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">⛔</span>
                <span>Cliente pedindo mudança estrutural no escopo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">⛔</span>
                <span>Situação de crise (erro grave, vazamento, problema legal)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">⛔</span>
                <span>Cliente insatisfeito repetidamente com entregas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">⛔</span>
                <span>Sobrecarga de trabalho insustentável</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">⛔</span>
                <span>Pedido que conflita com valores ou ética</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">⛔</span>
                <span>Necessidade de renegociar prazo ou budget estrutural</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Para quem escalar?</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-slate-900 mb-2">Direção Criativa</p>
                <p className="text-xs text-slate-600">Decisões sobre identidade visual, reposicionamento, estratégia criativa</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-slate-900 mb-2">Direção Criativa</p>
                <p className="text-xs text-slate-600">Problemas de alocação, sobrecarga, conflito de prioridades</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-slate-900 mb-2">DSM / Direção Criativa</p>
                <p className="text-xs text-slate-600">Insatisfação de cliente, mudança de escopo, renegociação comercial</p>
              </div>
            </div>

            <div className="mt-4 bg-red-100 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-slate-800">
                <strong>Importante:</strong> Escalar não é fraqueza. É maturidade profissional saber quando uma decisão está acima da sua alçada.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white rounded-xl p-8">
        <h3 className="font-semibold mb-4">Fluxo de Decisão Rápida</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
            <p className="text-slate-200">Você está diante de uma decisão → Identifique a zona (Verde, Amarela, Vermelha)</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
            <p className="text-slate-200">Zona Verde? Execute com confiança</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
            <p className="text-slate-200">Zona Amarela? Alinha rápido com pessoa certa antes de executar</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
            <p className="text-slate-200">Zona Vermelha? Escala imediatamente, não tenta resolver sozinho</p>
          </div>
        </div>
      </div>
    </div>
  );
}
